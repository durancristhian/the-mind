import { FunctionComponent } from 'preact';

import { CardList } from '../components/card-list';
import { TheMindCardProps } from '../components/the-mind-card';
import { CARD_TYPES } from '../utils/constants';
import { getImageUrl } from '../utils/get-image-url';

const concept: CARD_TYPES = 'levels';

const levels = Array.from({ length: 12 }).map<TheMindCardProps>((_, i) => {
  const idx = `${i + 1}`;

  return {
    backgroundImage: getImageUrl(concept, '1'),
    children: `Nivel ${idx}`,
    id: `${concept}-${idx}`,
    style: 'text',
  };
});

export const Levels: FunctionComponent = () => {
  return (
    <CardList
      amount={12}
      cards={levels}
      design="Lo mismo de ambos lados"
      title="Niveles"
    />
  );
};
