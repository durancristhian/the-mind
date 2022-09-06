import { FunctionComponent } from "preact";
import "./card.css";

export const Card: FunctionComponent<{ backgroundImage: string | null }> = ({
  children,
  backgroundImage,
}) => {
  return (
    <div className="card" style={{ "--card-bg": `url('${backgroundImage}')` }}>
      {children}
    </div>
  );
};
