/**
 * Each of these files will be used to create api routes in which data can be grabbed
 */
import { getSupabase } from "~/util/db.server"

export const API = {
  story: {
    GET: {
      latest: async (request: Request) => {
        const { data, error } = await getSupabase(request)
          .from("stories")
          .select(
            `
          id,
          title,
          snippet,
          created_at,
          updated_at,
          users (id, username)
          `
          )
          .limit(10)
        console.log(data, "error: ", error)
        return getSupabase(request).from("stories").select().limit(10)
      },
    },
  },
}
