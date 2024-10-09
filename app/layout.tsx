import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Payment History Dashboard",
  description: "View your payment history",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body style={{ margin: 0, padding: 16, backgroundColor: "gray.100" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
