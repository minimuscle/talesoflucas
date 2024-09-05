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

type TextProps = {
  as?: ElementType
  children?: ReactNode
  className?: string
} & AlignProps

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
  ...props
}: TextProps) {
  const alignmentKeys = [
    "align--center",
    "align--left",
    "align--right",
  ] as const
  const alignmentClass = alignmentKeys.find((key) => props[key])

  const { [alignmentClass!]: _, ...restProps } = props

  /*********  RENDER  *********/
  return (
    <Component
      className={`_Text${className}__${alignmentClass || ""}`}
      {...restProps}
    >
      {children}
    </Component>
  )
}
