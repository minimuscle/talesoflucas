/******************************************************************
 *  BASE IMPORTS                                                  *
 ******************************************************************/
import { useLoaderData } from "@remix-run/react"

/******************************************************************
 *  COMPONENT IMPORTS                                             *
 ******************************************************************/
import { Text } from "~/components/Text"
import { Button } from "@mantine/core"

/******************************************************************
 *  TYPE IMPORTS                                                  *
 ******************************************************************/
import type { loader } from "~/routes/_app+/_index/loader"

/******************************************************************
 *  CONSTS                                                        *
 ******************************************************************/
import "./_IndexContainer.scss"

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function IndexContainer() {
  /**********  HOOKS  **********/
  const { data } = useLoaderData<typeof loader>()
  return (
    <div className="IndexContainer">
      <h1>Welcome to Tales of Lucas</h1>
      <p>Feel free to browse around</p>
      <h2>Check out our latest stories:</h2>

      {/** //TODO: Conver this into a global card */}
      {data?.map((story) => (
        <div className="IndexContainer__Card" key={story.id}>
          <Text.Heading align--center>{story.title}</Text.Heading>
          <Text>{story.description}</Text>
          <Button color="blue" fullWidth>
            Read More
          </Button>
        </div>
      ))}
    </div>
  )
}
