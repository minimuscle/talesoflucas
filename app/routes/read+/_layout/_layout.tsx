import { Outlet } from '@remix-run/react'

export default function Story() {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  )
}
