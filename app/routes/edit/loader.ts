import { LoaderFunctionArgs } from "@remix-run/node"
import { createClient } from "@supabase/supabase-js"

export async function loader({request}: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const storyId = url.searchParams.get('story')
  const chapterId = url.searchParams.get('chapter')
  const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)

  if (chapterId && storyId) {
    const [story, chapter] = await Promise.all([
      supabase.from('stories').select('*').eq('id', storyId),
      supabase.from('chapters').select('*').eq('id', chapterId)
    ])
    return {story, chapter}
  } else if (storyId) {
    const { data } = await supabase.from('stories').select('*').eq('id', storyId)
    return {story: data}
  } else {
    const { data } = await supabase.from('stories').select('title')
    return {story_names: data}
  }

  return null
}