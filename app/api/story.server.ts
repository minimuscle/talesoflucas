/**
 * Each of these files will be used to create api routes in which data can be grabbed
 */
import { getSupabase } from "~/util/db.server"

export const API = {
  story: {
    GET: {
      user: (request: Request) => {
        return getSupabase(request).from("test_table").select().single()
      },
      latest: (request: Request) => {
        return getSupabase(request).from("story").select().limit(10)
      },
    },
  },
}
