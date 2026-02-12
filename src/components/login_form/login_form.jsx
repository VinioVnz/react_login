import React from "react";
import { Button, Container, TextField, InputAdornment } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import "./style.css";

export const LoginForm = () => {
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
      <form>
        <TextField
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

        <Button className="button">Login</Button>
      </form>
    </Container>
  );
};
