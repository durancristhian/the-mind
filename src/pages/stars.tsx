import { FunctionComponent } from 'preact';

import { CardList } from '../components/card-list';
import { TheMindCardProps } from '../components/the-mind-card';
import { CARD_TYPES } from '../utils/constants';
import { getImageUrl } from '../utils/get-image-url';

const concept: CARD_TYPES = 'stars';

const stars = Array.from({
  length: 6,
}).map<TheMindCardProps>((_, i) => {
  const idx = `${i + 1}`;

  return {
    backgroundImage: getImageUrl(concept, idx),
    id: `${concept}-${idx}`,
    style: 'empty',
  };
});

export const Stars: FunctionComponent = () => {
  return (
    <CardList
      amount={6}
      cards={stars}
      design="Lo mismo de ambos lados"
      title="Estrellitas"
    />
  );
};
