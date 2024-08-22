import {
    Table,
    TableContainer,
  } from "@mui/material";
  import { TabelaHead } from "./tabela/TabelaHead";
import { TabelaBodyInativos } from "./tabela/TabelaBodyInativos";
  
  export const TabelaInativos = () => {
    return (
      <TableContainer>
        <Table>
          <TabelaHead />
          <TabelaBodyInativos />
        </Table>
      </TableContainer>
    );
  };
  