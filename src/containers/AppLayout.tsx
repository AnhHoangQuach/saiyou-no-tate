import { AppFooter, AppHeaderClient } from "containers"
import { PropsWithChildren } from "react"

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <AppHeaderClient />
      {children}
      <AppFooter />
    </main>
  )
}

export default AppLayout
