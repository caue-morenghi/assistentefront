import {
  Table,
  TableContainer,
} from "@mui/material";
import { TabelaHead } from "./tabela/TabelaHead";
import { TabelaBody } from "./tabela/TabelaBody";

export const TabelaUsuarios = () => {
  return (
    <TableContainer>
      <Table>
        <TabelaHead />
        <TabelaBody />
      </Table>
    </TableContainer>
  );
};
