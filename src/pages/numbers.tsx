import { Grid, List, Stack, Title } from "@mantine/core";
import { FunctionComponent } from "preact";
import { Card } from "../components/card";
import { addDotIfNeeded } from "../utils/add-dot-if-needed";
import { getImageUrl } from "../utils/get-image-url";

const cards = Array.from({ length: 200 }).map((_, i) => ({
  id: i + 1,
  number: addDotIfNeeded(`${i + 1}`),
  backgroundImage: i + 1 < 128 ? getImageUrl("cards", i + 1) : null,
}));

export const Numbers: FunctionComponent = () => {
  return (
    <Stack>
      <Title order={2}>Números</Title>
      <List spacing="md">
        <List.Item>Cantidad: 200</List.Item>
        <List.Item>Diseño: frente distinto al dorso</List.Item>
      </List>
      <Grid>
        {cards.map(({ backgroundImage, id, number }) => (
          <Grid.Col span="content">
            <Card
              id={`card-${id}`}
              dataType="card"
              backgroundImage={backgroundImage}
            >
              {number}
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  );
};