import {
  AppShell,
  Box,
  MantineProvider,
  Navbar,
  NavLink,
  Stack,
  Title,
} from '@mantine/core';
import { FunctionComponent } from 'preact';
import { useState } from 'preact/hooks';

import { Page, PAGES } from './utils/constants';

export const App: FunctionComponent = () => {
  const [currentPage, setCurrentPage] = useState<Page>(PAGES[0]);

  const onSetPage = (nextPage: Page) => {
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
                {PAGES.map((page) => (
                  <NavLink
                    key={page.id}
                    label={page.label}
                    icon={<page.Icon size={24} stroke={1.5} />}
                    onClick={() => {
                      onSetPage(page);
                    }}
                    variant="filled"
                    active={currentPage.id === page.id}
                  />
                ))}
              </Box>
            </Stack>
          </Navbar>
        }
      >
        <currentPage.Component />
      </AppShell>
    </MantineProvider>
  );
};
