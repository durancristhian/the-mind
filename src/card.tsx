import { FunctionComponent } from "preact";
import "./card.css";

export const Card: FunctionComponent<{ backgroundImage: string | null }> = ({
  children,
  backgroundImage,
}) => {
  const textColor = backgroundImage ? "white" : "black";

  return (
    <div className="card" style={{ "--card-bg": `url('${backgroundImage}')` }}>
      <div className={`small-number top left ${textColor}`}>{children}</div>
      <div className={`small-number top right ${textColor}`}>{children}</div>
      <div className={`number ${textColor}`}>{children}</div>
      <div className={`small-number bottom left ${textColor}`}>{children}</div>
      <div className={`small-number bottom right ${textColor}`}>{children}</div>
    </div>
  );
};
