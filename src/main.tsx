import { Box, MantineProvider } from "@mantine/core";
import { render } from "preact";
import { TheMind } from "./components/the-mind";
import "./main.css";

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: `"Montserrat", serif`,
        lineHeight: 1,
      }}
    >
      <Box sx={{ backgroundColor: "#cce3de" }}>
        <TheMind />
      </Box>
    </MantineProvider>
  );
}

render(<App />, document.getElementById("app") as HTMLElement);
