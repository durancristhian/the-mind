import "./app.css";
import { Card } from "./card";
import { EmptyCard } from "./empty-card";

function getImageUrl(concept: string, number: number) {
  return new URL(`./${concept}/${number}.png`, import.meta.url).href;
}

function addDotIfNeeded(number: string) {
  return [
    "6",
    "9",
    "60",
    "66",
    "68",
    "69",
    "86",
    "89",
    "90",
    "96",
    "98",
    "99",
  ].includes(number)
    ? `${number}.`
    : number;
}

export function App() {
  const lives = Array.from({ length: 10 }).map((_, i) => ({
    backgroundImage: getImageUrl("lives", i + 1),
  }));
  const stars = Array.from({ length: 6 }).map((_, i) => ({
    backgroundImage: getImageUrl("stars", i + 1),
  }));
  const levels = Array.from({ length: 12 }).map((_, i) => ({
    number: i + 1,
    backgroundImage: getImageUrl("back", 1),
  }));
  const cards = Array.from({ length: 200 }).map((_, i) => ({
    number: addDotIfNeeded(`${i + 1}`),
    backgroundImage: i + 1 < 51 ? getImageUrl("cards", i + 1) : null,
  }));

  return (
    <>
      <h1>The mind</h1>
      <h2>Vidas (10)</h2>
      <div className="cards-container">
        {lives.map(({ backgroundImage }) => (
          <EmptyCard backgroundImage={backgroundImage} />
        ))}
      </div>
      <h2>Estrellitas (6)</h2>
      <div className="cards-container">
        {stars.map(({ backgroundImage }) => (
          <EmptyCard backgroundImage={backgroundImage} />
        ))}
      </div>
      <h2>Niveles (12)</h2>
      <div className="cards-container">
        {levels.map(({ number, backgroundImage }) => (
          <EmptyCard backgroundImage={backgroundImage}>
            Nivel {number}
          </EmptyCard>
        ))}
      </div>
      <h2>Revés de las cartas (200)</h2>
      <div className="cards-container">
        <EmptyCard backgroundImage={getImageUrl("back", 1)}>The mind</EmptyCard>
      </div>
      <h2>Cartas (200)</h2>
      <div className="cards-container">
        {cards.map(({ number, backgroundImage }) => (
          <Card backgroundImage={backgroundImage}>{number}</Card>
        ))}
      </div>
    </>
  );
}
