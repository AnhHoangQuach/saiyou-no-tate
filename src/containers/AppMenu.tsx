"use client"

import { ListItemButton, styled } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { publicRoute } from "routes"

const StyledListItem = styled(ListItemButton)({
  "&.Mui-selected": {
    backgroundColor: "transparent",
    borderColor: "black",
  },
  backgroundColor: "transparent",
  border: "2px solid transparent",
  borderRadius: 8,
  color: "var(--color-primary-main)",
  fontFamily: "var(--font-ad-pro-text) !important",
  fontSize: "24px",
  fontWeight: 600,
  whiteSpace: "nowrap",
})

const NavItem = ({ name, path }: { name: string; path: string }) => {
  const pathname = usePathname()
  const isHome = path === "/"
  return (
    <Link href={path}>
      <StyledListItem selected={isHome ? pathname === path : pathname.startsWith(path)}>{name}</StyledListItem>
    </Link>
  )
}

const AppMenu = () => {
  const { contact, feature, home, pricing, version } = publicRoute

  return (
    <div className="flex flex-col gap-2 xl:flex-row xl:gap-8">
      <NavItem {...home} />
      <NavItem {...feature} />
      <NavItem {...version} />
      <NavItem {...pricing} />
      <NavItem {...contact} />
    </div>
  )
}

export default AppMenu
