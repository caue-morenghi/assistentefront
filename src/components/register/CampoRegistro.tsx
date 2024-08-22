import { Box } from "@mui/material";
import { ICampoRegistroProps } from "../../types/users";

export const CampoRegistro = ({children}: ICampoRegistroProps) => {
  return (
    <Box
      component="div"
      style={{
        marginBottom: "1em",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
        gap: ".3em",
      }}
    >
      {children}
    </Box>
  );
};
