import { AppFooter, AppHeaderClient } from "containers"
import { PropsWithChildren } from "react"

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <AppHeaderClient />
      {children}
      <AppFooter />
      <div className="py-10 text-center text-lg text-[#5E6282] lg:py-20">All rights reserved@Airdata.vn</div>
    </main>
  )
}

export default AppLayout
