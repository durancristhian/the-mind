import download from "downloadjs";
import { getFontEmbedCSS, toJpeg } from "html-to-image";
import "./app.css";
import { Card } from "./card";
import { EmptyCard } from "./empty-card";

function getImageUrl(concept: string, number: number) {
  return new URL(`./images/${concept}/${number}.png`, import.meta.url).href;
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

const lives = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  backgroundImage: getImageUrl("lives", i + 1),
}));

const stars = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  backgroundImage: getImageUrl("stars", i + 1),
}));

const levels = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  number: i + 1,
  backgroundImage: getImageUrl("back", 1),
}));

const cards = Array.from({ length: 200 }).map((_, i) => ({
  id: i + 1,
  number: addDotIfNeeded(`${i + 1}`),
  backgroundImage: i + 1 < 101 ? getImageUrl("cards", i + 1) : null,
}));

export function App() {
  const onGenerateImages = async (dataType: string) => {
    const nodes = document.querySelectorAll(
      `[data-type="${dataType}"]`
    ) as NodeListOf<HTMLElement>;
    const elements = Array.from(nodes);

    const fontEmbedCSS = await getFontEmbedCSS(elements[0]);

    Promise.all(
      elements.map((element) =>
        toJpeg(element, { fontEmbedCSS })
          .then((dataUrl) => download(dataUrl, element.id))
          .catch((error) => console.error(error))
      )
    );
  };

  return (
    <>
      <h1 className="box">The mind</h1>
      <h2 className="box">Vidas (10)</h2>
      <div className="box">
        <button onClick={() => onGenerateImages("live")}>
          Descargar vidas
        </button>
      </div>
      <div className="cards-container">
        {lives.map(({ backgroundImage, id }) => (
          <EmptyCard
            id={`live-${id}`}
            dataType="live"
            backgroundImage={backgroundImage}
          />
        ))}
      </div>
      <h2 className="box">Estrellitas (6)</h2>
      <div className="box">
        <button onClick={() => onGenerateImages("star")}>
          Descargar estrellitas
        </button>
      </div>
      <div className="cards-container">
        {stars.map(({ backgroundImage, id }) => (
          <EmptyCard
            id={`star-${id}`}
            dataType="star"
            backgroundImage={backgroundImage}
          />
        ))}
      </div>
      <h2 className="box">Niveles (12)</h2>
      <div className="box">
        <button onClick={() => onGenerateImages("level")}>
          Descargar niveles
        </button>
      </div>
      <div className="cards-container">
        {levels.map(({ backgroundImage, id, number }) => (
          <EmptyCard
            id={`level-${id}`}
            dataType="level"
            backgroundImage={backgroundImage}
          >
            Nivel {number}
          </EmptyCard>
        ))}
      </div>
      <h2 className="box">Revés de las cartas ({cards.length})</h2>
      <div className="box">
        <button onClick={() => onGenerateImages("back")}>
          Descargar revés
        </button>
      </div>
      <div className="cards-container">
        <EmptyCard
          id="back-1"
          dataType="back"
          backgroundImage={getImageUrl("back", 1)}
        >
          The mind
        </EmptyCard>
      </div>
      <h2 className="box">Cartas ({cards.length})</h2>
      <div className="box">
        <button onClick={() => onGenerateImages("card")}>
          Descargar cartas
        </button>
      </div>
      <div className="cards-container">
        {cards.map(({ backgroundImage, id, number }) => (
          <Card
            id={`card-${id}`}
            dataType="card"
            backgroundImage={backgroundImage}
          >
            {number}
          </Card>
        ))}
      </div>
    </>
  );
}
