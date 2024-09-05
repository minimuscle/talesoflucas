import { Container } from "@mantine/core"
import { Outlet } from "@remix-run/react"

export default function Layout() {
  return (
    <>
      <h1>Header Read</h1>
      <Container size="lg">
        <Outlet />
      </Container>
    </>
  )
}
