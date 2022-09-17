import { Grid } from "@mantine/core";
import { FunctionComponent } from "preact";
import { Card } from "../components/card";
import { CardList } from "../components/card-list";
import { addDotIfNeeded } from "../utils/add-dot-if-needed";
import { getImageUrl } from "../utils/get-image-url";

const type = "numbers";

const cards = Array.from({ length: 200 }).map((_, i) => ({
  id: i + 1,
  number: addDotIfNeeded(`${i + 1}`),
  backgroundImage: i + 1 < 128 ? getImageUrl(type, i + 1) : null,
}));

export const Numbers: FunctionComponent = () => {
  return (
    <CardList
      title="Números"
      amount={200}
      design="Frente distinto al dorso"
      type={type}
    >
      <Grid>
        {cards.map(({ backgroundImage, id, number }) => (
          <Grid.Col span="content">
            <Card
              id={`${type}-${id}`}
              dataType={type}
              backgroundImage={backgroundImage}
            >
              {number}
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </CardList>
  );
};
