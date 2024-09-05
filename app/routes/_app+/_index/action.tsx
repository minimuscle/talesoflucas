/******************************************************************
 *  BASE IMPORTS                                                  *
 ******************************************************************/
import { LoaderFunctionArgs } from "@remix-run/node"
import { API } from "~/api/users.server"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export async function action({ request }: LoaderFunctionArgs) {
  /*******  API CALLS  *******/
  //const { data, error } = await API.users.GET.user(request)
  // return { data }
  return null
}
