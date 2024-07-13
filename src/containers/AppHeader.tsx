"use client"

import { Menu as MenuIcon } from "@mui/icons-material"
import { AppBar, Container, Divider, Drawer, IconButton, Toolbar } from "@mui/material"
import { AppMenu } from "containers"
import { useResponsive } from "hooks"
import Image from "next/image"
import { useState } from "react"

const AppHeader = () => {
  const { isDesktop } = useResponsive()

  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <AppBar elevation={0} position="sticky" style={{ backgroundColor: "#FFFFFFC0" }}>
      <Container>
        <Toolbar className="h-20 px-0 xl:h-44">
          <div className="flex w-full items-center justify-between">
            <div className="hidden xl:block">
              <Image alt="Logo" height={120} priority src="/logo.png" width={300} />
            </div>

            <div style={{ display: isDesktop ? "flex" : "none" }}>
              <AppMenu />
            </div>

            <Drawer
              anchor="left"
              hidden={isDesktop}
              onClose={() => setOpenDrawer(false)}
              open={openDrawer}
              PaperProps={{ style: { padding: "8px 16px", width: "280px" } }}
              variant={isDesktop ? "persistent" : "temporary"}
            >
              <Image alt="Logo" className="mx-auto" height={40} priority src="/logo.png" width={180} />
              <Divider className="my-4" />
              <AppMenu />
            </Drawer>

            {!isDesktop && (
              <div className="flex w-full items-center justify-between">
                <Image alt="Logo" height={40} priority src="/logo.png" width={180} />
                <IconButton onClick={() => setOpenDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              </div>
            )}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppHeader
