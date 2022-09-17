import { Grid } from "@mantine/core";
import { FunctionComponent } from "preact";
import { CardList } from "../components/card-list";
import { EmptyCard } from "../components/empty-card";
import { getImageUrl } from "../utils/get-image-url";

const type = "lives";

const lives = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  backgroundImage: getImageUrl(type, i + 1),
}));

export const Lives: FunctionComponent = () => {
  return (
    <CardList
      title="Vidas"
      amount={10}
      design="Lo mismo de ambos lados"
      type={type}
    >
      <Grid>
        {lives.map(({ backgroundImage, id }) => (
          <Grid.Col span="content">
            <EmptyCard
              id={`${type}-${id}`}
              dataType={type}
              backgroundImage={backgroundImage}
            />
          </Grid.Col>
        ))}
      </Grid>
    </CardList>
  );
};
