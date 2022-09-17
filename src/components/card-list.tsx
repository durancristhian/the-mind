import { Box, Button, Group, List, Stack, Tabs, Title } from "@mantine/core";
import { IconPlayCard, IconPrinter } from "@tabler/icons";
import download from "downloadjs";
import { getFontEmbedCSS, toPng } from "html-to-image";
import { FunctionComponent } from "preact";
import { useMemo, useState } from "preact/hooks";

export const CardList: FunctionComponent<{
  title: string;
  amount: number;
  design: string;
  type: "lives" | "stars" | "levels" | "numbers";
}> = ({ amount, children, design, title, type }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const buttons = useMemo(() => {
    return Array.from({ length: Math.ceil(amount / 10) }).map((_, i) => i * 10);
  }, [amount]);

  const onGenerateImages = async (
    start?: number | undefined,
    end?: number | undefined
  ) => {
    setIsProcessing(true);

    const nodes = document.querySelectorAll(
      `[data-type="${type}"]`
    ) as NodeListOf<HTMLElement>;

    const elements = Array.from(nodes);
    const exportableElements = elements.slice(start || 0, end);

    const fontEmbedCSS = await getFontEmbedCSS(exportableElements[0]);

    Promise.all(
      exportableElements.map((element) =>
        toPng(element, {
          fontEmbedCSS,
          canvasHeight: 1020,
          canvasWidth: 680,
        })
          .then((dataUrl) => download(dataUrl, element.id))
          .catch((error) => console.error(error))
      )
    ).finally(() => setIsProcessing(false));
  };

  return (
    <Stack>
      <Title order={2}>{title}</Title>
      <Tabs defaultValue="design" variant="outline">
        <Tabs.List>
          <Tabs.Tab value="design" icon={<IconPlayCard />}>
            Diseño
          </Tabs.Tab>
          <Tabs.Tab value="print" icon={<IconPrinter size={14} />}>
            Impresión
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="design" pt="md">
          <Stack>
            <List spacing="md">
              <List.Item>Cantidad: {amount}</List.Item>
              <List.Item>Tipo: {design}</List.Item>
            </List>
            <Group>
              {buttons.map((button) => (
                <Button onClick={onGenerateImages} disabled={isProcessing}>
                  Descargar {button}-
                  {button + 10 > amount ? amount : button + 10}
                </Button>
              ))}
            </Group>
            <Box>{children}</Box>
          </Stack>
        </Tabs.Panel>
        <Tabs.Panel value="print" pt="md">
          <Stack>
            <Box></Box>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
};
