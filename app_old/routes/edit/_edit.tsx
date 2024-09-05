import { Button, ButtonGroup, Container } from '@mantine/core'
import Editor from './Editor'
import { useLoaderData } from '@remix-run/react'

export { loader } from './loader'
export { action } from './action'

export default function Edit() {
  const loaderData = useLoaderData<any>()
  return (
    <Container size={'lg'}>
      <ButtonGroup>
        <Button>Save</Button>
        <Button>Publish</Button>
      </ButtonGroup>
      <p>{JSON.stringify(loaderData)}</p>
      <Editor />
    </Container>
  )
}
