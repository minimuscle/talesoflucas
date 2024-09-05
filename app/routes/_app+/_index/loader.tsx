import { LoaderFunctionArgs } from "@remix-run/node"
import { API } from "~/api/users.server"

export async function loader({ request }: LoaderFunctionArgs) {
  /*******  API CALLS  *******/
  //const { data, error } = await API.users.GET.user(request)

  //return { data }
  return null
}
