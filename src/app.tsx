import {
  AppShell,
  Box,
  MantineProvider,
  Navbar,
  NavLink,
  Stack,
  Title,
} from "@mantine/core";
import { IconElevator, IconHeart, IconNumber, IconStar } from "@tabler/icons";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { Levels } from "./pages/levels";
import { Lives } from "./pages/lives";
import { Numbers } from "./pages/numbers";
import { Stars } from "./pages/stars";

const PAGES = [
  {
    id: "lives",
    label: "Vidas",
    Icon: IconHeart,
  },
  {
    id: "stars",
    label: "Estrellitas",
    Icon: IconStar,
  },
  {
    id: "levels",
    label: "Niveles",
    Icon: IconElevator,
  },
  {
    id: "numbers",
    label: "Números",
    Icon: IconNumber,
  },
];

export const App: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(PAGES[0].id);

  const onSetPage = (nextPage: string) => {
    setCurrentPage(nextPage);
  };

  return (
    <MantineProvider
      theme={{
        fontFamily: `"Montserrat", serif !important`,
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <AppShell
        navbar={
          <Navbar width={{ base: 300 }} pt="md">
            <Stack>
              <Title order={1} align="center">
                The mind
              </Title>
              <Box>
                {PAGES.map(({ Icon, id, label }) => (
                  <NavLink
                    label={label}
                    icon={<Icon size={24} stroke={1.5} />}
                    onClick={() => {
                      onSetPage(id);
                    }}
                    variant="filled"
                    active={currentPage === id}
                  />
                ))}
              </Box>
            </Stack>
          </Navbar>
        }
      >
        {currentPage === PAGES[0].id && <Lives />}
        {currentPage === PAGES[1].id && <Stars />}
        {currentPage === PAGES[2].id && <Levels />}
        {currentPage === PAGES[3].id && <Numbers />}
      </AppShell>
    </MantineProvider>
  );
};
