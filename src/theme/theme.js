import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: { fontWeight: 700, fontSize: "3rem" },
    h2: { fontWeight: 600, fontSize: "2.5rem" },
    h3: { fontWeight: 600, fontSize: "2rem" },
    body1: { fontSize: "1rem", fontWeight: 400 },
    button: { textTransform: "none", fontWeight: 500 },
  },
  palette: {
    primary: { main: "#000000" }, // Black
    secondary: { main: "#FFCC00" }, // Yellow
    background: { default: "#FFFFFF" }, // White Background
    text: { primary: "#000000", secondary: "#6D6D6D" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: "8px", padding: "10px 20px" },
      },
    },
  },
});

export default theme;
