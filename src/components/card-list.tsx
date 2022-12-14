import {
  Box,
  Button,
  Grid,
  Group,
  List,
  Stack,
  Tabs,
  Text,
  Title,
} from '@mantine/core';
import { IconPlayCard, IconPrinter } from '@tabler/icons';
import download from 'downloadjs';
import { getFontEmbedCSS, toPng } from 'html-to-image';
import { FunctionComponent } from 'preact';
import { useMemo, useState } from 'preact/hooks';

import { TheMindCard, TheMindCardProps } from './the-mind-card';

export const CardList: FunctionComponent<{
  amount: number;
  cards: TheMindCardProps[];
  design: string;
  title: string;
}> = ({ amount, cards, design, title }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const buttons = useMemo(() => {
    return Array.from({ length: Math.ceil(amount / 10) }).map((_, i) => i * 10);
  }, [amount]);

  const onGenerateImages = async (start: number) => {
    setIsProcessing(true);

    const nodes = document.querySelectorAll(
      `.card`,
      // eslint-disable-next-line no-undef
    ) as NodeListOf<HTMLElement>;

    const elements = Array.from(nodes);
    const exportableElements = elements.slice(start, start + 10);

    const fontEmbedCSS = await getFontEmbedCSS(exportableElements[0]);

    Promise.all(
      exportableElements.map((element) =>
        toPng(element, {
          fontEmbedCSS,
          canvasHeight: 1020,
          canvasWidth: 680,
        })
          .then((dataUrl) => download(dataUrl, element.id))
          .catch((error) => console.error(error)),
      ),
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
          <Tabs.Tab value="print" icon={<IconPrinter size={14} />} disabled>
            Impresión
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="design">
          <Box
            p="md"
            sx={(theme) => ({
              borderLeft: `1px solid ${theme.colors.gray[3]}`,
              borderRight: `1px solid ${theme.colors.gray[3]}`,
              borderBottom: `1px solid ${theme.colors.gray[3]}`,
            })}
          >
            <Stack>
              <List spacing="md">
                <List.Item>
                  Cantidad:{' '}
                  <Text weight="bold" component="span">
                    {amount}
                  </Text>
                </List.Item>
                <List.Item>
                  Tipo:{' '}
                  <Text weight="bold" component="span">
                    {design}
                  </Text>
                </List.Item>
              </List>
              <Group>
                {buttons.map((button) => (
                  <Button
                    key={button}
                    onClick={() => {
                      onGenerateImages(button);
                    }}
                    disabled={isProcessing}
                  >
                    Descargar {button + 1}-
                    {button + 10 > amount ? amount : button + 10}
                  </Button>
                ))}
              </Group>
              <Grid>
                {cards.map(({ id, ...rest }) => (
                  <Grid.Col key={id} span="content">
                    <TheMindCard id={id} {...rest} />
                  </Grid.Col>
                ))}
              </Grid>
            </Stack>
          </Box>
        </Tabs.Panel>
        <Tabs.Panel value="print">
          <Box
            p="md"
            sx={(theme) => ({
              borderLeft: `1px solid ${theme.colors.gray[3]}`,
              borderRight: `1px solid ${theme.colors.gray[3]}`,
              borderBottom: `1px solid ${theme.colors.gray[3]}`,
            })}
          >
            <Stack>
              <Box></Box>
            </Stack>
          </Box>
        </Tabs.Panel>
      </Tabs>
    </Stack>
  );
};
