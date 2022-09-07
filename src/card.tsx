import { FunctionComponent } from "preact";
import "./card.css";

export const Card: FunctionComponent<{ backgroundImage: string | null }> = ({
  children,
  backgroundImage,
}) => {
  const numberColor = backgroundImage ? "white" : "black";

  return (
    <div className="card" style={{ "--card-bg": `url('${backgroundImage}')` }}>
      <div className={`small-number top left ${numberColor}`}>{children}</div>
      <div className={`small-number top right ${numberColor}`}>{children}</div>
      <div className={`number ${numberColor}`}>{children}</div>
      <div className={`small-number bottom left ${numberColor}`}>
        {children}
      </div>
      <div className={`small-number bottom right ${numberColor}`}>
        {children}
      </div>
    </div>
  );
};
