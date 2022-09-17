import { Grid, List, Stack, Title } from "@mantine/core";
import { FunctionComponent } from "preact";
import { EmptyCard } from "../components/empty-card";
import { getImageUrl } from "../utils/get-image-url";

const lives = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  backgroundImage: getImageUrl("lives", i + 1),
}));

export const Lives: FunctionComponent = () => {
  return (
    <Stack>
      <Title order={2}>Vidas</Title>
      <List spacing="md">
        <List.Item>Cantidad: 10</List.Item>
        <List.Item>Diseño: Lo mismo de ambos lados</List.Item>
      </List>
      <Grid>
        {lives.map(({ backgroundImage, id }) => (
          <Grid.Col span="content">
            <EmptyCard
              id={`live-${id}`}
              dataType="live"
              backgroundImage={backgroundImage}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};
