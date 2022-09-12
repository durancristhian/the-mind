import { Button, Container, Grid, Title } from "@mantine/core";
import download from "downloadjs";
import { getFontEmbedCSS, toJpeg } from "html-to-image";
import { useState } from "preact/hooks";
import { addDotIfNeeded } from "../utils/add-dot-if-needed";
import { getImageUrl } from "../utils/get-image-url";
import { Card } from "./card";
import { EmptyCard } from "./empty-card";

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
  backgroundImage: getImageUrl("levels", 1),
}));

const cards = Array.from({ length: 200 }).map((_, i) => ({
  id: i + 1,
  number: addDotIfNeeded(`${i + 1}`),
  backgroundImage: i + 1 < 101 ? getImageUrl("cards", i + 1) : null,
}));

export function TheMind() {
  const [isProcessing, setIsProcessing] = useState(false);

  const onGenerateImages = async (
    dataType: string,
    start?: number | undefined,
    end?: number | undefined
  ) => {
    setIsProcessing(true);
    const nodes = document.querySelectorAll(
      `[data-type="${dataType}"]`
    ) as NodeListOf<HTMLElement>;
    const elements = Array.from(nodes);
    const exportableElements = elements.slice(start || 0, end);

    const fontEmbedCSS = await getFontEmbedCSS(exportableElements[0]);

    Promise.all(
      exportableElements.map((element) =>
        toJpeg(element, { fontEmbedCSS })
          .then((dataUrl) => download(dataUrl, element.id))
          .catch((error) => console.error(error))
      )
    ).finally(() => setIsProcessing(false));
  };

  return (
    <Container size="xl">
      <Grid>
        <Grid.Col span={12}>
          <Title order={1} align="center">
            The mind
          </Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={2}>Vidas (10)</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Button
            onClick={() => onGenerateImages("live")}
            disabled={isProcessing}
          >
            Descargar vidas
          </Button>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>
            {lives.map(({ backgroundImage, id }) => (
              <Grid.Col span="content">
                <EmptyCard
                  id={`live-${id}`}
                  dataType="live"
                  backgroundImage={backgroundImage}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={2}>Estrellitas (6)</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Button
            onClick={() => onGenerateImages("star")}
            disabled={isProcessing}
          >
            Descargar estrellitas
          </Button>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>
            {stars.map(({ backgroundImage, id }) => (
              <Grid.Col span="content">
                <EmptyCard
                  id={`star-${id}`}
                  dataType="star"
                  backgroundImage={backgroundImage}
                />
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={2}>Niveles (12)</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Button
            onClick={() => onGenerateImages("level")}
            disabled={isProcessing}
          >
            Descargar niveles
          </Button>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>
            {levels.map(({ backgroundImage, id, number }) => (
              <Grid.Col span="content">
                <EmptyCard
                  id={`level-${id}`}
                  dataType="level"
                  backgroundImage={backgroundImage}
                >
                  Nivel {number}
                </EmptyCard>
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={2}>Revés de las cartas ({cards.length})</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Button
            onClick={() => onGenerateImages("back")}
            disabled={isProcessing}
          >
            Descargar revés
          </Button>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span="content">
              <EmptyCard
                id="back-1"
                dataType="back"
                backgroundImage={getImageUrl("back", 1)}
              >
                The mind
              </EmptyCard>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
          <Title order={2}>Cartas ({cards.length})</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>
            {[
              0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
              150, 160, 170, 180, 190,
            ].map((start) => (
              <Grid.Col span="content">
                <Button
                  onClick={() => onGenerateImages("card", start, start + 10)}
                  disabled={isProcessing}
                >
                  Descargar cartas ({start}-{start + 10})
                </Button>
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>
            {cards.map(({ backgroundImage, id, number }) => (
              <Grid.Col span="content">
                <Card
                  id={`card-${id}`}
                  dataType="card"
                  backgroundImage={backgroundImage}
                >
                  {number}
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
