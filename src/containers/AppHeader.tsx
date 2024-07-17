import { AppBar, Toolbar } from "@mui/material"
import { AppMenu } from "containers"

const AppHeader = () => {
  return (
    <AppBar className="px-0" elevation={0} position="sticky" style={{ backgroundColor: "#FFFFFFC0" }}>
      <Toolbar className="h-[100px] px-0">
        <AppMenu />
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
