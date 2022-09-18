import { FunctionComponent } from 'preact';

import { CardList } from '../components/card-list';
import { TheMindCardProps } from '../components/the-mind-card';
import { addDotIfNeeded } from '../utils/add-dot-if-needed';
import { CARD_TYPES } from '../utils/constants';
import { getImageUrl } from '../utils/get-image-url';

const concept: CARD_TYPES = 'numbers';

const numbers = Array.from({
  length: 200,
}).map<TheMindCardProps>((_, i) => {
  const idx = `${i + 1}`;

  return {
    backgroundImage: i + 1 < 128 ? getImageUrl(concept, idx) : null,
    children: addDotIfNeeded(`${idx}`),
    id: `${concept}-${idx}`,
    style: 'number',
  };
});

export const Numbers: FunctionComponent = () => {
  return (
    <CardList
      amount={200}
      cards={numbers}
      design="Frente distinto al dorso"
      title="Números"
    />
  );
};
