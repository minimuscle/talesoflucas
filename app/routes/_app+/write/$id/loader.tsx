/******************************************************************
 *  TYPE IMPORTS                                                  *
 ******************************************************************/
import type { LoaderFunctionArgs } from "@remix-run/node"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export async function loader({ params }: LoaderFunctionArgs) {
  console.log(params)
  return null
}
