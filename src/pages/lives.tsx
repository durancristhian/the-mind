import { Grid } from "@mantine/core";
import { FunctionComponent } from "preact";
import { Card } from "../components/card";
import { CardList } from "../components/card-list";
import { getImageUrl } from "../utils/get-image-url";

const type = "lives";

const lives = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  backgroundImage: getImageUrl(type, i + 1),
}));

export const Lives: FunctionComponent = () => {
  return (
    <CardList
      amount={10}
      design="Lo mismo de ambos lados"
      title="Vidas"
      type={type}
    >
      <Grid>
        {lives.map(({ backgroundImage, id }) => (
          <Grid.Col span="content">
            <Card
              backgroundImage={backgroundImage}
              dataType={type}
              id={`${type}-${id}`}
              type="empty"
            />
          </Grid.Col>
        ))}
      </Grid>
    </CardList>
  );
};
