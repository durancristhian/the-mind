import {
  IconElevator,
  IconHeart,
  IconNumber,
  IconStar,
  TablerIconProps,
} from '@tabler/icons';
import { FunctionalComponent } from 'preact';

import { Levels } from '../pages/levels';
import { Lives } from '../pages/lives';
import { Numbers } from '../pages/numbers';
import { Stars } from '../pages/stars';

export type CARD_TYPES = 'lives' | 'stars' | 'levels' | 'numbers';

export interface Page {
  id: CARD_TYPES;
  label: string;
  Icon: FunctionalComponent<TablerIconProps>;
  Component: FunctionalComponent;
}

export const PAGES: Page[] = [
  {
    id: 'lives',
    label: 'Vidas',
    Icon: IconHeart,
    Component: Lives,
  },
  {
    id: 'stars',
    label: 'Estrellitas',
    Icon: IconStar,
    Component: Stars,
  },
  {
    id: 'levels',
    label: 'Niveles',
    Icon: IconElevator,
    Component: Levels,
  },
  {
    id: 'numbers',
    label: 'Números',
    Icon: IconNumber,
    Component: Numbers,
  },
];
