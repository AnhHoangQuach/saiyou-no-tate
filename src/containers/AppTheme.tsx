"use client"

import { createTheme, ThemeProvider } from "@mui/material/styles"
import { PropsWithChildren } from "react"

const theme = createTheme({
  breakpoints: {
    values: {
      lg: 1200,
      md: 900,
      sm: 600,
      xl: 1600,
      xs: 0,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        color: "primary",
        disableElevation: true,
        size: "medium",
        variant: "contained",
      },
      styleOverrides: {
        sizeLarge: { fontSize: 18, minHeight: 48, minWidth: 48 },
        sizeMedium: { fontSize: 16, minHeight: 40, minWidth: 40 },
        sizeSmall: { fontSize: 14, minHeight: 32, minWidth: 32 },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
      },
    },

    MuiDialog: {
      defaultProps: {
        fullWidth: true,
        maxWidth: "sm",
      },
    },
    MuiPagination: {
      defaultProps: {
        shape: "rounded",
        size: "large",
        variant: "outlined",
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
        size: "medium",
        variant: "outlined",
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1E1D4C",
    },
    secondary: {
      main: "#F1A501",
    },
    success: {
      main: "#8FD00A",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    button: { fontWeight: 700, textTransform: "none" },
    fontFamily: "var(--font-ad-pro-text)",
  },
})

const AppTheme = ({ children }: PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default AppTheme
