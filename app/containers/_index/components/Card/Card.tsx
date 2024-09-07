/******************************************************************
 *  BASE IMPORTS                                                  *
 ******************************************************************/

/******************************************************************
 *  COMPONENT IMPORTS                                             *
 ******************************************************************/
import { Text } from "~/components/Text"
import { Button } from "@mantine/core"
import "./_Card.scss"

/******************************************************************
 *  TYPE IMPORTS                                                  *
 ******************************************************************/

/******************************************************************
 *  COMPONENT START                                               *
 ******************************************************************/
export function Card({ story }: { story: any }) {
  return (
    <div className="Card" key={story.id}>
      <div>
        <Text.Heading>{story.title}</Text.Heading>
        <Text>
          By:{" "}
          <Text span bold italic secondary>
            {story.users.username}
          </Text>
        </Text>
      </div>
      <Text className="Card__Snippet">{story.snippet}</Text>
      <Button color="blue" fullWidth>
        Read More
      </Button>
    </div>
  )
}
