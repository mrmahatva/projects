import './globals.css'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import { Theme, ThemePanel } from '@radix-ui/themes'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS - RedixUI',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark" accentColor="gray" grayColor="slate" scaling="100%">
          {children}
          {/* <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  )
}
