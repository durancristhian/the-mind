import { Grid } from "@mantine/core";
import { FunctionComponent } from "preact";
import { CardList } from "../components/card-list";
import { EmptyCard } from "../components/empty-card";
import { getImageUrl } from "../utils/get-image-url";

const type = "levels";

const levels = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  number: i + 1,
  backgroundImage: getImageUrl(type, 1),
}));

export const Levels: FunctionComponent = () => {
  return (
    <CardList
      title="Niveles"
      amount={12}
      design="Lo mismo de ambos lados"
      type={type}
    >
      <Grid>
        {levels.map(({ backgroundImage, id, number }) => (
          <Grid.Col span="content">
            <EmptyCard
              id={`${type}-${id}`}
              dataType={type}
              backgroundImage={backgroundImage}
            >
              Nivel {number}
            </EmptyCard>
          </Grid.Col>
        ))}
      </Grid>
    </CardList>
  );
};
