import { robotoMono } from "@/config/fonts";
import { metadata } from "@/config/meta";
import "./globals.css";

export const metaData = metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${robotoMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
