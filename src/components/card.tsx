import { FunctionComponent } from "preact";
import "./card.css";

export const Card: FunctionComponent<{
  backgroundImage: string | null;
  id: string;
  dataType: string;
}> = ({ backgroundImage, children, dataType, id }) => {
  const textColor = backgroundImage ? "white" : "black";

  return (
    <div
      id={id}
      data-type={dataType}
      className="card"
      style={{ "--card-bg": `url('${backgroundImage}')` }}
    >
      <div className="guideline">
        <div className="guideline-1"></div>
        <div className="guideline-2"></div>
        <div className="guideline-3"></div>
        <div className="guideline-4"></div>
      </div>
      <div className={`small-number top left ${textColor}`}>{children}</div>
      <div className={`small-number top right ${textColor}`}>{children}</div>
      <div className={`number center ${textColor}`}>{children}</div>
      <div className={`small-number bottom left ${textColor}`}>{children}</div>
      <div className={`small-number bottom right ${textColor}`}>{children}</div>
    </div>
  );
};
