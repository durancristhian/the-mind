import { FunctionComponent } from "preact";
import "./card.css";

export const EmptyCard: FunctionComponent<{
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
      <div class={`small-number center ${textColor}`}>{children}</div>
    </div>
  );
};
