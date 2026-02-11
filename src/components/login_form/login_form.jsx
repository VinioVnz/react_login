import React from "react";
import { Button, Container, TextField } from "@mui/material";
import "./style.css";

export const LoginForm = () => {
  return (
    <Container className="container" component="article" maxWidth="sm">
      <form>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          id="password"
          label="Senha"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <Button fullWidth sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Container>
  );
};
