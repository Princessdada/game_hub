import { Game } from "../hooks/useGames";
import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "./image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card width="maxW" borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack
          justifyContent={"space-between"}
          marginBottom={"3"}
          wrap={"wrap"}>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (p) => p.platform
            )}></PlatformIconList>
          <Box flexShrink={0}>
            <CriticScore score={game.metacritic}></CriticScore>
          </Box>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
