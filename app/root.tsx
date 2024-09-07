import { ColorSchemeScript, MantineProvider } from "@mantine/core"
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import "@mantine/core/styles.css"
import "@mantine/tiptap/styles.css"
import { theme } from "./util/theme"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <ColorSchemeScript />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Outlet />
    </MantineProvider>
  )
}
