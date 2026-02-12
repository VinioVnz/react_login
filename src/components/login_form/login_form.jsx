import React, { useState } from "react";
import { Button, Container, TextField, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import "./style.css";

import { useAuth } from "../../hooks/useAuth";

export const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container
      className="container"
      component="article"
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "750px",
      }}
    >
      <label className="title">Bem vindo de volta!</label>
      <form onSubmit={handleLogin}>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="textfield"
          id="email"
          label="Email"
          variant="outlined"
          margin="normal"
          placeholder="Ex: user@gmail.com"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon />
                </InputAdornment>
              ),
            },
          }}
        />

        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="textfield"
          id="password"
          label="Senha"
          variant="outlined"
          margin="normal"
          placeholder="Digite sua senha"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            },
          }}
        />

        <Button type="submit" className="button">
          {loading ? "Entrando..." : "Login"}
        </Button>
      </form>
    </Container>
  );
};
