import "./app.css";
import { Card } from "./card";
import { EmptyCard } from "./empty-card";

function getImageUrl(concept: string, number: number) {
  return new URL(`./${concept}/${number}.png`, import.meta.url).href;
}

export function App() {
  const lives = Array.from({ length: 5 }).map((_, i) => ({
    number: i + 1,
  }));
  const stars = Array.from({ length: 3 }).map((_, i) => ({
    number: i + 1,
  }));
  const levels = Array.from({ length: 12 }).map((_, i) => ({
    number: i + 1,
    backgroundImage: getImageUrl("levels", i + 1),
  }));
  const cards = Array.from({ length: 100 }).map((_, i) => ({
    number: i + 1,
    /* TODO: */
    backgroundImage: i + 1 < 37 ? getImageUrl("cards", i + 1) : null,
  }));

  return (
    <>
      <h1>The mind</h1>
      <h2>Vidas (5)</h2>
      <div className="cards-container">
        {lives.map(({ number }) => (
          <EmptyCard backgroundImage={null}>Vida {number}</EmptyCard>
        ))}
      </div>
      <h2>Estrellitas (3)</h2>
      <div className="cards-container">
        {stars.map(({ number }) => (
          <EmptyCard backgroundImage={null}>Estrellita {number}</EmptyCard>
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
      <h2>Revés de las cartas (100)</h2>
      <div className="cards-container">
        <EmptyCard backgroundImage={null}>The mind</EmptyCard>
      </div>
      <h2>Cartas (100)</h2>
      <div className="cards-container">
        {cards.map(({ number, backgroundImage }) => (
          <Card backgroundImage={backgroundImage}>{number}</Card>
        ))}
      </div>
    </>
  );
}
