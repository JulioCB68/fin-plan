'use client'

import { ReactNode } from 'react'

import {
  QueryClient,
  QueryClientProvider as QueryClientP,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

export default function QueryClientProvider({
  children,
}: {
  children: ReactNode
}) {
  return <QueryClientP client={queryClient}>{children}</QueryClientP>
}
