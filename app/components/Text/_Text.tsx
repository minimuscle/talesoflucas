/* eslint-disable @typescript-eslint/no-unused-vars */
/******************************************************************
 *  TYPE IMPORTS                                                  *
 ******************************************************************/
import classNames from "classnames"
import type { ElementType, ReactNode } from "react"

/******************************************************************
 *  TYPE DEFINITIONS                                              *
 ******************************************************************/
type AlignProps = {
  "align--center"?: boolean
  "align--left"?: boolean
  "align--right"?: boolean
}

type StyleProps = {
  italic?: boolean
  semiBold?: boolean
  bold?: boolean
  underline?: boolean
  lineThrough?: boolean
  capitalize?: boolean
  uppercase?: boolean
  lowercase?: boolean
}

type TextProps = {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
  children?: ReactNode
  className?: string
  span?: boolean
} & AlignProps &
  StyleProps

/******************************************************************
 *  CONSTS                                                        *
 ******************************************************************/
import "./_Text.scss"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function _Text({
  as: Component = "p",
  children,
  className = "",
  span = false,
  ...props
}: TextProps) {
  // Alignment is split into separate keys to allow for only one alignment to be applied
  const alignmentKeys = [
    "align--center",
    "align--left",
    "align--right",
  ] as const
  const alignmentClass = alignmentKeys.find((key) => props[key])

  const styleMapping = [
    "italic",
    "semiBold",
    "bold",
    "underline",
    "lineThrough",
    "capitalize",
    "uppercase",
    "lowercase",
  ] as const

  const { [alignmentClass!]: _, ...restProps } = props

  const classNameValue = classNames(
    "_Text",
    className,
    alignmentClass,
    ...Object.values(styleMapping).map((style) => props[style] && style)
  )

  if (span) Component = "span"

  /*********  RENDER  *********/
  return (
    <Component className={classNameValue} {...restProps}>
      {children}
    </Component>
  )
}
