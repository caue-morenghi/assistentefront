import {
  Box,
  Input,
  InputLabel,
  useTheme,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import FMedidasForm, {
  TMedidasProps,
} from "../../hooks/funcionalidades/medidas";
import GeralFunctions from "../../utils/GeralFunctions";
import { createAnaliseMedidas, createMedida } from "../../services/api/funcionalidades/MedidasService";
import { editAcaoUsusario } from "../../services/api/usuarios/UsuariosService";
import ModalMedidas from "./tabela-medidas/Modal";
import axios from "axios";

export const MedidasForm = () => {
  const { register, handleSubmit } = FMedidasForm();
  const { navigate } = GeralFunctions();
  const { token, user } = useAuth();

  const theme = useTheme();

  const handleDataSubmit = async (data: TMedidasProps) => {
    const convertedData = {
      id: data.id,
      usuario_id: user?.id,
      panturrilha_esquerda: parseFloat(data.panturrilha_esquerda),
      panturrilha_direita: parseFloat(data.panturrilha_direita),
      perna_esquerda: parseFloat(data.perna_esquerda),
      perna_direita: parseFloat(data.perna_direita),
      abdomen: parseFloat(data.abdomen),
      peitoral: parseFloat(data.peitoral),
      braco_esquerdo: parseFloat(data.braco_esquerdo),
      braco_direito: parseFloat(data.braco_direito),
      antebraco_esquerdo: parseFloat(data.antebraco_esquerdo),
      antebraco_direito: parseFloat(data.antebraco_direito),
      created_at: '',
    };

    const resmedida = await createMedida(convertedData, token);
    console.log(resmedida)
    if (resmedida) {
      const res = await axios.get('http://127.0.0.1:5000/run-script')
      const analise = res.data

      console.log(analise)

      if (analise) {
        const res2 = await createAnaliseMedidas(user?.id, resmedida.id, analise, token)
        console.log(res2)
      }
    }

    if (resmedida) {
      await editAcaoUsusario(token, {
        feito_por: user?.id,
        descricao: `Registro de medidas do usuário ${user?.username}`,
      });

      navigate("/medidas");
    }

    console.log(convertedData);
  };

  return (
    <form
      style={{
        backgroundColor: `${theme.palette.background.paper}`,
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
              required
              {...register("panturrilha_esquerda")}
            />
            <Input
              type="number"
              placeholder="Direita"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              required
              {...register("panturrilha_direita")}
            />
          </Box>
        </Box>
        <Box sx={{ width: "40%" }}>
          <InputLabel>Pernas</InputLabel>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <Input
              type=""
              placeholder="Esquerda"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              required
              {...register("perna_esquerda")}
            />
            <Input
              type="number"
              placeholder="Direita"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              required
              {...register("perna_direita")}
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
              required
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
              required
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
              required
              {...register("braco_esquerdo")}
            />
            <Input
              type="number"
              placeholder="Direito"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              required
              {...register("braco_direito")}
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
              required
              {...register("antebraco_esquerdo")}
            />
            <Input
              type="number"
              placeholder="Direito"
              sx={{ width: "45%", padding: "0.5em", fontSize: "15px" }}
              required
              {...register("antebraco_direito")}
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
      <ModalMedidas />
    </form>
  );
};
