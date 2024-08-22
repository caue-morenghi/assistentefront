import {
  Box,
  Grid,
  Input,
  InputLabel,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import FMedidasForm from "../../hooks/funcionalidades/medidas";
import GeralFunctions from "../../utils/GeralFunctions";
import styled from "@emotion/styled";
import { Label } from "@mui/icons-material";

export const MedidasForm = () => {
  const { register, handleSubmit, errors } = FMedidasForm();
  const { navigate } = GeralFunctions();
  const { token, user } = useAuth();

  const theme = useTheme();

  const handleDataSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      style={{
        backgroundColor: "#fff",
        borderRadius: "7px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        marginTop: "1em",
        padding: "1em",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
      onSubmit={handleSubmit(handleDataSubmit)}
    >
      <Box
        width="100%"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Box sx={{ width: "40%" }}>
          <InputLabel>Panturrilhas</InputLabel>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Input
              type="number"
              placeholder="Esquerda"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              {...register("panturrilhaEsquerda")}
            />
            <Input
              type="number"
              placeholder="Direita"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              {...register("panturrilhaDireita")}
            />
          </Box>
        </Box>
        <Box sx={{ width: "40%" }}>
          <InputLabel>Pernas</InputLabel>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Input
              type="number"
              placeholder="Esquerda"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              {...register("pernaEsquerda")}
            />
            <Input
              type="number"
              placeholder="Direita"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              {...register("pernaDireita")}
            />
          </Box>
        </Box>
      </Box>

      <Box
        width="100%"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Box sx={{ width: "40%" }}>
          <InputLabel>Abdômen</InputLabel>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Input
              type="number"
              placeholder=""
              sx={{ width: "100%", padding: "0.5em", fontSize: "15px" }}
              {...register("abdomen")}
            />
          </Box>
        </Box>
        <Box sx={{ width: "40%" }}>
          <InputLabel>Peitoral</InputLabel>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Input
              type="number"
              placeholder=""
              sx={{ width: "100%", padding: "0.5em", fontSize: "15px" }}
              {...register("peitoral")}
            />
          </Box>
        </Box>
      </Box>

      <Box
        width="100%"
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Box sx={{ width: "40%" }}>
          <InputLabel>Braços</InputLabel>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Input
              type="number"
              placeholder="Esquerdo"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              {...register("bracoEsquerdo")}
            />
            <Input
              type="number"
              placeholder="Direito"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              {...register("bracoDireito")}
            />
          </Box>
        </Box>
        <Box sx={{ width: "40%" }}>
          <InputLabel>Antebraços</InputLabel>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Input
              type="number"
              placeholder="Esquerdo"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              {...register("antebracoEsquerdo")}
            />
            <Input
              type="number"
              placeholder="Direito"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              {...register("antebracoDireito")}
            />
          </Box>
        </Box>
      </Box>

      <button
        style={{
          color: "#fff",
          padding: "1em",
          backgroundColor: theme.palette.primary.main,
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontFamily: "'Montserrat', sans-serif",
          textTransform: "uppercase",
        }}
      >
        Registrar
      </button>
    </form>
  );
};
