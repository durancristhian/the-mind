import { FunctionComponent } from 'preact';

import { CardList } from '../components/card-list';
import { TheMindCardProps } from '../components/the-mind-card';
import { CARD_TYPES } from '../utils/constants';
import { getImageUrl } from '../utils/get-image-url';

const concept: CARD_TYPES = 'lives';

const lives = Array.from({
  length: 10,
}).map<TheMindCardProps>((_, i) => {
  const idx = `${i + 1}`;

  return {
    backgroundImage: getImageUrl(concept, idx),
    id: `${concept}-${idx}`,
    style: 'empty',
  };
});

export const Lives: FunctionComponent = () => {
  return (
    <CardList
      amount={10}
      cards={lives}
      design="Lo mismo de ambos lados"
      title="Vidas"
    />
  );
};
