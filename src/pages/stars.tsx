import { Grid, List, Stack, Title } from "@mantine/core";
import { FunctionComponent } from "preact";
import { EmptyCard } from "../components/empty-card";
import { getImageUrl } from "../utils/get-image-url";

const stars = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  backgroundImage: getImageUrl("stars", i + 1),
}));

export const Stars: FunctionComponent = () => {
  return (
    <Stack>
      <Title order={2}>Estrellitas</Title>
      <List spacing="md">
        <List.Item>Cantidad: 6</List.Item>
        <List.Item>Diseño: Lo mismo de ambos lados</List.Item>
      </List>
      <Grid>
        {stars.map(({ backgroundImage, id }) => (
          <Grid.Col span="content">
            <EmptyCard
              id={`star-${id}`}
              dataType="star"
              backgroundImage={backgroundImage}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};
