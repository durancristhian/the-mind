import './the-mind-card.css';

import clsx from 'clsx';
import { FunctionComponent } from 'preact';

export interface TheMindCardProps {
  backgroundImage: string | null;
  id: string;
  print?: boolean;
  style: 'empty' | 'text' | 'number';
}

export const TheMindCard: FunctionComponent<TheMindCardProps> = ({
  backgroundImage,
  children,
  id,
  print,
  style,
}) => {
  const textColor = backgroundImage ? 'white' : 'black';

  return (
    <div
      id={id}
      className={clsx(
        'card',
        style,
        textColor,
        backgroundImage ? null : 'border',
      )}
      style={{ '--card-bg': `url('${backgroundImage}')` }}
    >
      {print && (
        <div className="guideline">
          <div className="guideline-1" />
          <div className="guideline-2" />
          <div className="guideline-3" />
          <div className="guideline-4" />
        </div>
      )}
      {style === 'text' && <div className="small center">{children}</div>}
      {style === 'number' && (
        <>
          <div className="small top left">{children}</div>
          <div className="small top right">{children}</div>
          <div className="number center">{children}</div>
          <div className="small bottom left">{children}</div>
          <div className="small bottom right">{children}</div>
        </>
      )}
    </div>
  );
};
