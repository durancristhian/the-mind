import "./app.css";
import { Card } from "./card";

function getImageUrl(number: number) {
  return new URL(`./cards/${number}.png`, import.meta.url).href;
}

export function App() {
  const numbers = Array.from({ length: 100 }).map((_, i) => ({
    number: i + 1,
    backgroundImage: getImageUrl(i + 1),
  }));

  return (
    <div className="cards-container">
      {numbers.map(({ number, backgroundImage }) => (
        <Card backgroundImage={backgroundImage}>{number}</Card>
      ))}
    </div>
  );
}
