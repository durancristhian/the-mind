import "./app.css";
import { Card } from "./card";
import { EmptyCard } from "./empty-card";

const liveBackgroundModules = import.meta.glob("./assets/lives/*.png", {
  eager: true,
});
const starBackgroundModules = import.meta.glob("./assets/stars/*.png", {
  eager: true,
});
const backBackgroundModules = import.meta.glob("./assets/back/*.png", {
  eager: true,
});
const cardBackgroundModules = import.meta.glob("./assets/cards/*.png", {
  eager: true,
});

function getImageUrl(
  concept: string,
  number: number,
  bgModules: typeof cardBackgroundModules
) {
  const path = `./assets/${concept}/${number}.png`;

  if (!bgModules[path]) {
    return null;
  }

  return new URL(path, import.meta.url).href;
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
    backgroundImage: getImageUrl("lives", i + 1, liveBackgroundModules),
  }));
  const stars = Array.from({ length: 6 }).map((_, i) => ({
    backgroundImage: getImageUrl("stars", i + 1, starBackgroundModules),
  }));
  const levels = Array.from({ length: 12 }).map((_, i) => ({
    number: i + 1,
    backgroundImage: getImageUrl("back", 1, backBackgroundModules),
  }));
  const cards = Array.from({ length: 200 }).map((_, i) => ({
    number: addDotIfNeeded(`${i + 1}`),
    backgroundImage: getImageUrl("cards", i + 1, cardBackgroundModules),
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
        <EmptyCard
          backgroundImage={getImageUrl("back", 1, backBackgroundModules)}
        >
          The mind
        </EmptyCard>
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
