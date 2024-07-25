import { Button, Container } from "@mantine/core"
import type { MetaFunction } from "@remix-run/node"
import { Link } from "@remix-run/react"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <Container>
      <h1>Coming Soon</h1>
      <Button component={Link} prefetch="intent" to="/read">
        Read
      </Button>
      <Button component={Link} prefetch="intent" to="/edit">
        Edit Story
      </Button>
    </Container>
  )
}
