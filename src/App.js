import "./App.css";
import { LoginForm } from "./components/login_form/login_form";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography, Box } from "@mui/material";
import { ContainerImage } from "./components/container_image/container_image";
import { AuthProvider } from "./context/auth_context";
import { useAuth } from "./hooks/useAuth";
function App() {
  const { user } = useAuth();
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
            padding: "20px",
            borderRadius: "20px",
            position: "relative",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              position: "absolute",
              top: 20,
              left: 40,
              fontSize: '25px',
              width: "250px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              color: "#8A22F2"
            }}
          >
            Bem vindo, {user?.nome ?? "Visitante"}!
          </Typography>
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
