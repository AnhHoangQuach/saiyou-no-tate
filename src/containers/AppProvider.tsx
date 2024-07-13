"use client"

import { QueryClientProvider } from "@tanstack/react-query"
import { AppTheme } from "containers"
import { SnackbarProvider } from "notistack"
import { PropsWithChildren } from "react"
import { queryClient } from "services"

const AppProvider = ({ children }: PropsWithChildren) => {
  return (
    <SnackbarProvider anchorOrigin={{ horizontal: "left", vertical: "bottom" }} variant="success">
      <QueryClientProvider client={queryClient}>
        <AppTheme>{children}</AppTheme>
      </QueryClientProvider>
    </SnackbarProvider>
  )
}

export default AppProvider
