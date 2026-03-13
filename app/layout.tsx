import { Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteHeader } from "@/components/layouts/header";
import { Toaster } from "@/components/ui/sonner"

import "@/assets/css/tailwind.css"
import "@/assets/css/app.css"


const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/hack-font/3.3.0/web/hack.min.css" rel="stylesheet" />
      </head>
      <body
        className={`${josefin.className} antialiased min-h-screen bg-background font-sans`}
      >
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}