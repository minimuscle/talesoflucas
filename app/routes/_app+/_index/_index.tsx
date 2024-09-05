/******************************************************************
 *  BASE IMPORTS                                                  *
 ******************************************************************/
import type { MetaFunction } from "@remix-run/node"

/******************************************************************
 *  COMPONENT IMPORTS                                             *
 ******************************************************************/
import { IndexContainer } from "~/containers/_index/IndexContainer"

/******************************************************************
 *  REMIX FUNCTIONS                                               *
 ******************************************************************/
export { loader } from "./loader"
export { action } from "./action"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export default function Index() {
  return <IndexContainer />
}
