/******************************************************************
 *  BASE IMPORTS                                                  *
 ******************************************************************/

/******************************************************************
 *  COMPONENT IMPORTS                                             *
 ******************************************************************/
import { Text } from "~/components/Text"
import { Button } from "@mantine/core"

/******************************************************************
 *  TYPE IMPORTS                                                  *
 ******************************************************************/

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Card({ story }: { story: any }) {
  return (
    <div className="IndexContainer__Card" key={story.id}>
      <Text.Heading>{story.title}</Text.Heading>
      <Text>
        {story.description} <Text span>This is span</Text>
      </Text>
      <Button color="blue" fullWidth>
        Read More
      </Button>
    </div>
  )
}
