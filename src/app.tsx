import {
  AppShell,
  Header,
  MantineProvider,
  Navbar,
  NavLink,
  Title,
} from "@mantine/core";
import { IconPlayCard } from "@tabler/icons";
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
    Icon: IconPlayCard,
  },
  {
    id: "stars",
    label: "Estrellitas",
    Icon: IconPlayCard,
  },
  {
    id: "levels",
    label: "Niveles",
    Icon: IconPlayCard,
  },
  {
    id: "numbers",
    label: "Números",
    Icon: IconPlayCard,
  },
];

export const App: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState(PAGES[0].id);

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
          <Header p="md" height={78}>
            <Title order={1}>The mind</Title>
          </Header>
        }
        navbar={
          <Navbar width={{ base: 300 }} p="md">
            <Navbar.Section>
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
            </Navbar.Section>
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
