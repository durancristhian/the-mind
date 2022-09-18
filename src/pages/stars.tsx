import { Grid } from '@mantine/core';
import { FunctionComponent } from 'preact';

import { Card } from '../components/card';
import { CardList } from '../components/card-list';
import { getImageUrl } from '../utils/get-image-url';

const type = 'stars';

const stars = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  backgroundImage: getImageUrl(type, i + 1),
}));

export const Stars: FunctionComponent = () => {
  return (
    <CardList
      amount={6}
      design="Lo mismo de ambos lados"
      title="Estrellitas"
      type={type}
    >
      <Grid>
        {stars.map(({ backgroundImage, id }) => (
          <Grid.Col key={id} span="content">
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
