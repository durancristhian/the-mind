import { FunctionComponent } from "preact";
import "./card.css";

export const EmptyCard: FunctionComponent<{
  backgroundImage: string | null;
}> = ({ children, backgroundImage }) => {
  const textColor = backgroundImage ? "white" : "black";

  return (
    <div className="card" style={{ "--card-bg": `url('${backgroundImage}')` }}>
      <div class={`small-number center ${textColor}`}>{children}</div>
    </div>
  );
};
