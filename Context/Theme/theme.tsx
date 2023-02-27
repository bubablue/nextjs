import { ThemeOptions } from "@mui/material";
import Colours from "./Colours";

// const primary = Colours.AP060.dark
const secondary = Colours.BROWN.light;
// const defaultBorderColor = Colours.N070.light
// const tableRowHover = Colours.AP010.light

export const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
  palette: {
    mode,
    secondary: {
      main: secondary,
      light: Colours.BROWN.light,
      dark: Colours.BROWN.dark,
    },
    primary: {
      main: Colours.BROWN[mode],
      light: "#FFFFFF",
      dark: Colours.BROWN[mode],
    },
    info: {
      main: "#1890FF",
      light: "#E6F7FF",
      dark: "#33719E",
    },
    success: {
      main: "#97BD6F",
      light: "#F6FFED",
      dark: "#689844",
    },
    error: {
      main: "#F5222D",
      light: "#FFF1F0",
      dark: "#C74545",
    },
  },
  typography: {},
  components: {},
});
