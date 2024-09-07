/**
 * Each of these files will be used to create api routes in which data can be grabbed
 */
import { getSupabase } from "~/util/db.server"

export const API = {
  story: {
    GET: {
      latest: async (request: Request) => {
        return getSupabase(request)
          .from("stories")
          .select(
            `
          id,
          title,
          snippet,
          created_at,
          updated_at,
          chapters,
          users (id, username)
          `
          )
          .limit(10)
      },
    },
  },
}
