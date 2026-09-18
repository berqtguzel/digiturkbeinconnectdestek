import { createServer } from "node:http";
import next from "next";
import { format } from "prettier";

const dev = process.argv.includes("--dev");
const hostname = process.env.HOSTNAME ?? "localhost";
const port = Number.parseInt(process.env.PORT ?? "3000", 10);

async function formatSourceHtml(html) {
  return format(html, {
    parser: "html",
    printWidth: 120,
    tabWidth: 2,
    useTabs: false,
    htmlWhitespaceSensitivity: "ignore",
  });
}

function shouldFormatHtml(request) {
  if (request.method !== "GET" || request.url?.startsWith("/_next/")) return false;

  const pathname = new URL(request.url ?? "/", `http://${request.headers.host ?? "localhost"}`)
    .pathname;
  const acceptsHtml = request.headers.accept?.includes("text/html");
  const hasFileExtension = /\.[a-z0-9]+$/i.test(pathname);

  // Chrome may request view-source with `Accept: */*`. Extensionless routes are
  // HTML documents in this app, so format only that source-view response. A
  // regular page request must stay untouched to preserve React hydration.
  return !acceptsHtml && !hasFileExtension;
}

function captureHtmlResponse(request, response) {
  if (!shouldFormatHtml(request)) return;

  const chunks = [];
  const write = response.write.bind(response);
  const end = response.end.bind(response);
  const writeHead = response.writeHead.bind(response);

  response.writeHead = (statusCode, statusMessageOrHeaders, headers) => {
    response.statusCode = statusCode;

    const suppliedHeaders =
      typeof statusMessageOrHeaders === "object" ? statusMessageOrHeaders : headers;

    if (suppliedHeaders) {
      for (const [name, value] of Object.entries(suppliedHeaders)) {
        if (value !== undefined) response.setHeader(name, value);
      }
    }

    return response;
  };

  response.flushHeaders = () => {};
  response.write = (chunk, encoding) => {
    if (chunk) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding));
    return true;
  };

  response.end = (chunk, encoding) => {
    if (chunk) chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding));

    const contentType = String(response.getHeader("content-type") ?? "");
    const body = Buffer.concat(chunks);

    if (!contentType.includes("text/html")) {
      write(body);
      return end();
    }

    const sendHtml = (html) => {
      const formatted = Buffer.from(html);
      response.removeHeader("content-length");
      response.removeHeader("etag");
      response.setHeader("content-length", formatted.byteLength);
      writeHead(response.statusCode);
      write(formatted);
      end();
    };

    void formatSourceHtml(body.toString("utf8"))
      .then(sendHtml)
      .catch((error) => {
        console.error("HTML source formatting failed", error);
        sendHtml(body);
      });

    return response;
  };
}

const server = createServer(async (request, response) => {
  captureHtmlResponse(request, response);

  try {
    await handle(request, response);
  } catch (error) {
    console.error("Request failed", error);

    if (!response.headersSent) response.statusCode = 500;
    response.end("Internal server error");
  }
});

const app = next({ dev, hostname, port, httpServer: server });
const handle = app.getRequestHandler();

await app.prepare();

server.listen(port, hostname, () => {
  console.log(`> Ready on http://${hostname}:${port} (${dev ? "development" : "production"})`);
});
