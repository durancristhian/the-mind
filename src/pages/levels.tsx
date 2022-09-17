import { Grid, List, Stack, Title } from "@mantine/core";
import { FunctionComponent } from "preact";
import { EmptyCard } from "../components/empty-card";
import { getImageUrl } from "../utils/get-image-url";

const levels = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  number: i + 1,
  backgroundImage: getImageUrl("levels", 1),
}));

export const Levels: FunctionComponent = () => {
  return (
    <Stack>
      <Title order={2}>Niveles</Title>
      <List spacing="md">
        <List.Item>Cantidad: 12</List.Item>
        <List.Item>Diseño: Lo mismo de ambos lados</List.Item>
      </List>
      <Grid>
        {levels.map(({ backgroundImage, id, number }) => (
          <Grid.Col span="content">
            <EmptyCard
              id={`level-${id}`}
              dataType="level"
              backgroundImage={backgroundImage}
            >
              Nivel {number}
            </EmptyCard>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};
