import "./App.css";
import { LoginForm } from "./components/login_form/login_form";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
import { ContainerImage } from "./components/container_image/container_image";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "1600px",
            height: "800px",
            backgroundColor: "#EAE4F2",
            padding: '20px',
            borderRadius: '20px'
          }}
        >
          <LoginForm />
          <ContainerImage />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

const theme = createTheme({
  palette: {
    primary: {
      main: "#8A22F2",
    },
    background: {
      default: "#1F1F1F",
    },
  },
});
