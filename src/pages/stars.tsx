import { Grid } from "@mantine/core";
import { FunctionComponent } from "preact";
import { CardList } from "../components/card-list";
import { EmptyCard } from "../components/empty-card";
import { getImageUrl } from "../utils/get-image-url";

const type = "stars";

const stars = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  backgroundImage: getImageUrl(type, i + 1),
}));

export const Stars: FunctionComponent = () => {
  return (
    <CardList
      title="Estrellitas"
      amount={6}
      design="Lo mismo de ambos lados"
      type={type}
    >
      <Grid>
        {stars.map(({ backgroundImage, id }) => (
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
