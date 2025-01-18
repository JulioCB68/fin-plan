import { Toaster } from '@/components/ui/sonner'
import { robotoMono } from '@/config/fonts'
import { metadata } from '@/config/meta'
import QueryClientProvider from '@/providers/query-client-provider'

import '@/assets/styles/globals.css'

export const metaData = metadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoMono.variable} ${robotoMono.variable} antialiased`}
      >
        <QueryClientProvider>{children}</QueryClientProvider>
        <Toaster richColors />
      </body>
    </html>
  )
}
