import { createTheme } from "@mui/material";
import { cyan } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4d648d",
      dark: "#1F3A5F",
      light: "#acc2ef",
      contrastText: "#000",
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: "#fff",
    },
    background: {
      default: "#f7f6f3",
      paper: "#fff",
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif'
  },
});
