import { TableCell, TableHead, TableRow, useTheme } from "@mui/material";
import { useAuth } from "../../../contexts/AuthContext";

export const TabelaHead = () => {
  const theme = useTheme();

  const { user } = useAuth()

  return (
    <TableHead>
      {user?.perfil === 1 
        ?
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Nome
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Email
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Data de criação
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Data de modificação
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Perfil
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            ></TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            ></TableCell>
            
          </TableRow>
        : 
          <TableRow>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Nome
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Email
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Data de criação
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Data de modificação
            </TableCell>
            <TableCell
              sx={{
                textAlign: "center",
                color: `${theme.palette.primary.light}`,
              }}
            >
              Perfil
            </TableCell>
          </TableRow>
      }
    </TableHead>
  );
};
