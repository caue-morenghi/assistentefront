import { TableCell, TableRow, Tooltip } from "@mui/material";
import { deleteMedidaById, TMedidaProps } from "../../../services/api/funcionalidades/MedidasService";
import { Delete, Edit } from "@mui/icons-material";
import { useAuth } from "../../../contexts/AuthContext";

export const Medida = ({ panturrilha_direita, panturrilha_esquerda, perna_direita, perna_esquerda, abdomen, braco_direito, braco_esquerdo, antebraco_direito, antebraco_esquerdo, peitoral, id, created_at }: TMedidaProps) => {

  const { token } = useAuth()

  const deletarMedida = async (id: number) => {
    await deleteMedidaById(id, token)
  }

  return (
    <TableRow>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {new Date(created_at).toLocaleDateString()}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {panturrilha_esquerda}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {panturrilha_direita}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {perna_esquerda}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {perna_direita}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {abdomen}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {peitoral}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {braco_esquerdo}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {braco_direito}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {antebraco_esquerdo}
      </TableCell>
      <TableCell
        sx={{
          textAlign: "center",
        }}
      >
        {antebraco_direito}
      </TableCell>
        <TableCell
          sx={{
            textAlign: "center",
          }}
        >
          <Tooltip title="Deletar medida">
            <Delete sx={{ cursor: 'pointer' }} onClick={() => deletarMedida(id)}/>
          </Tooltip>
        </TableCell>
    </TableRow>
  );
};
