import { Button, MantineProvider } from "@mantine/core"
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import "@mantine/tiptap/styles.css"
import "@mantine/core/styles.css"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
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
    <MantineProvider>
      <Button component={Link} to={"/"}>
        Home
      </Button>
      <h1>Root Header</h1>
      <Outlet />
    </MantineProvider>
  )
}
