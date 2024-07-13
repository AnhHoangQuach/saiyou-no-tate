import type { Metadata } from "next"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import { AppLayout, AppProvider } from "containers"
import { Roboto_Slab } from "next/font/google"
import localFont from "next/font/local"
import { PropsWithChildren } from "react"
import "styles/App.scss"

export const ad_font = localFont({
  src: [
    {
      path: "../assets/fonts/AD-Pro-Text-Regular.otf",
      style: "regular",
      weight: "400",
    },
    {
      path: "../assets/fonts/AD-Pro-Text-Medium.otf",
      style: "medium",
      weight: "500",
    },
    {
      path: "../assets/fonts/AD-Pro-Text-Bold.otf",
      style: "bold",
      weight: "700",
    },
  ],
  variable: "--font-ad-pro-text",
})

export const roboto_slab = Roboto_Slab({
  display: "swap",
  subsets: ["vietnamese"],
  variable: "--font-roboto-slab",
})

export const metadata: Metadata = {
  description: `Airdata là hệ thống quản lý bán vé máy bay hàng đầu tại Việt Nam mang đến một loạt các tính năng và tiện ích độc đáo, nhằm tạo lợi ích tối đa cho doanh nghiệp trong việc quản lý và điều hành bán vé máy bay.`,
  title: `Airdata - Hệ thống đặt vé đại lý hiện đại`,
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ad_font.variable} ${roboto_slab.variable}`}>
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
