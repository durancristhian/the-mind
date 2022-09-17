import {
  AppShell,
  Center,
  Header,
  MantineProvider,
  Navbar,
  NavLink,
  Title,
} from "@mantine/core";
import { IconElevator, IconHeart, IconNumber, IconStar } from "@tabler/icons";
import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { Levels } from "./pages/levels";
import { Lives } from "./pages/lives";
import { Numbers } from "./pages/numbers";
import { Stars } from "./pages/stars";

const DESIGN_PAGES = [
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
  const [currentPage, setCurrentPage] = useState(DESIGN_PAGES[0].id);

  const onSetPage = (nextPage: string) => {
    setCurrentPage(nextPage);
  };

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: `"Montserrat", serif`,
        lineHeight: 1,
      }}
    >
      <AppShell
        padding="md"
        header={
          <Header height={64}>
            <Center
              sx={{
                height: 64,
              }}
            >
              <Title order={1} align="center">
                The mind
              </Title>
            </Center>
          </Header>
        }
        navbar={
          <Navbar p="md" width={{ base: 300 }}>
            <Navbar.Section>
              {DESIGN_PAGES.map(({ Icon, id, label }) => (
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
            </Navbar.Section>
          </Navbar>
        }
      >
        {currentPage === DESIGN_PAGES[0].id && <Lives />}
        {currentPage === DESIGN_PAGES[1].id && <Stars />}
        {currentPage === DESIGN_PAGES[2].id && <Levels />}
        {currentPage === DESIGN_PAGES[3].id && <Numbers />}
      </AppShell>
    </MantineProvider>
  );
};
