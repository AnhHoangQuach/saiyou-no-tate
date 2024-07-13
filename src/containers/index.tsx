import dynamic from "next/dynamic"

export const AppHeaderClient = dynamic(() => import("containers/AppHeader"), { ssr: false })

export { default as AppFooter } from "./AppFooter"
export { default as AppLayout } from "./AppLayout"
export { default as AppMenu } from "./AppMenu"
export { default as AppProvider } from "./AppProvider"
export { default as AppTheme } from "./AppTheme"
