import { Grid } from '@mantine/core';
import { FunctionComponent } from 'preact';

import { Card } from '../components/card';
import { CardList } from '../components/card-list';
import { getImageUrl } from '../utils/get-image-url';

const type = 'levels';

const levels = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  number: i + 1,
  backgroundImage: getImageUrl(type, 1),
}));

export const Levels: FunctionComponent = () => {
  return (
    <CardList
      amount={12}
      design="Lo mismo de ambos lados"
      title="Niveles"
      type={type}
    >
      <Grid>
        {levels.map(({ backgroundImage, id, number }) => (
          <Grid.Col key={id} span="content">
            <Card
              backgroundImage={backgroundImage}
              dataType={type}
              id={`${type}-${id}`}
              type="text"
            >
              Nivel {number}
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </CardList>
  );
};
