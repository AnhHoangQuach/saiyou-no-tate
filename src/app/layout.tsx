import type { Metadata } from "next"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { AppLayout, AppProvider } from "containers"
import { Inter, Noto_Sans_JP } from "next/font/google"
import { PropsWithChildren } from "react"
import "styles/App.scss"

export const notoSansJP = Noto_Sans_JP({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
})

export const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  description: ``,
  title: ``,
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${notoSansJP.variable} ${inter.variable}`}>
        <AppRouterCacheProvider>
          <AppProvider>
            <AppLayout>{children}</AppLayout>
          </AppProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default RootLayout
