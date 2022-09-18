import './card.css';

import clsx from 'clsx';
import { FunctionComponent } from 'preact';

export const Card: FunctionComponent<{
  backgroundImage: string | null;
  dataType: string;
  id: string;
  print?: boolean;
  type: 'empty' | 'text' | 'number';
}> = ({ backgroundImage, children, dataType, id, print, type }) => {
  const textColor = backgroundImage ? 'white' : 'black';

  return (
    <div
      id={id}
      data-type={dataType}
      className={clsx(
        'card',
        type,
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
      {type === 'text' && <div className="small center">{children}</div>}
      {type === 'number' && (
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
