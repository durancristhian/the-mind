import { FunctionComponent } from "preact";
import "./card.css";

export const Card: FunctionComponent<{ backgroundImage: string | null }> = ({
  children,
  backgroundImage,
}) => {
  return (
    <div className="card" style={{ "--card-bg": `url('${backgroundImage}')` }}>
      <div className="small-number top left">{children}</div>
      <div className="small-number top right">{children}</div>
      <div className="number">{children}</div>
      <div className="small-number bottom left">{children}</div>
      <div className="small-number bottom right">{children}</div>
    </div>
  );
};
