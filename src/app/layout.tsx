import { Inter } from "next/font/google";

import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={inter.className} style={{ margin: 0, padding: 0 }}>
          {children}
        </body>
      </Providers>
    </html>
  );
}

export default RootLayout;
