import type { ReactNode } from "react"
import { _Text } from "../_Text"

export function _Heading({
  children,
  ...props
}: {
  children: ReactNode
  [key: string]: any
}) {
  return (
    <_Text as="h3" {...props}>
      {children}
    </_Text>
  )
}
