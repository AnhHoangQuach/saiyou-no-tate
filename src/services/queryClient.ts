import { QueryClient } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {},
    queries: {
      refetchOnMount: "always",
      retry: 0,
      staleTime: 60 * 1000,
    },
  },
})
