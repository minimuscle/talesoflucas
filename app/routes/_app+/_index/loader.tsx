/******************************************************************
 *  BASE IMPORTS                                                  *
 ******************************************************************/
import { LoaderFunctionArgs } from "@remix-run/node"
import { API } from "~/api/stories.server"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export async function loader({ request }: LoaderFunctionArgs) {
  /*******  API CALLS  *******/
  const { data } = await API.story.GET.latest(request)
  return { data }
}
