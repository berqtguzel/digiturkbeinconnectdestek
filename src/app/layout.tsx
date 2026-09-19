import type { Metadata } from "next";
import { FloatingMatchCard } from "@/components/floating-match-card";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteConfig.origin,
  title: {
    default: "Digiturk | TV ve İnternet Paketleri",
    template: "%s | Digiturk Paketleri",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: siteConfig.name,
    title: "Digiturk TV ve İnternet Paketleri",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary",
    title: "Digiturk TV ve İnternet Paketleri",
    description: siteConfig.description,
  },
  icons: {
    icon: { url: "/brand/digiturk-symbol.png", type: "image/png" },
    apple: "/brand/digiturk-symbol.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <FloatingMatchCard />
      </body>
    </html>
  );
}
