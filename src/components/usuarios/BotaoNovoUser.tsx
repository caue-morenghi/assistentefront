import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const BotaoNovoUser = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/register")}
      sx={{ color: "#fff" }}
      variant="contained"
    >
      Novo Usuário
    </Button>
  );
};
