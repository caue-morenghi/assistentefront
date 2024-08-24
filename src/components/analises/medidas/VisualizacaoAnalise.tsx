import {
  Box,
  Divider,
  Drawer,
  IconButton,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { useAuth } from "../../../contexts/AuthContext";
import { useState } from "react";
import { Person, Visibility } from "@mui/icons-material";
import { TAnalisesMedidasProps } from "../../../services/api/funcionalidades/MedidasService";

export const VisualizacaoAnalise = ({ usuario_id, updated_at, medida_id, id, created_at, analise }: TAnalisesMedidasProps) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const theme = useTheme();
  const { user } = useAuth();

  return (
    <>
      <Tooltip title="Ver análise" onClick={toggleDrawer(true)}>
        <IconButton>
          <Visibility
            sx={{ color: theme.palette.primary.contrastText }}
            fontSize="small"
          ></Visibility>
        </IconButton>
      </Tooltip>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <Box
          width={theme.spacing(50)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(10)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={1}
          >
            <Typography sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Person />{user?.username}</Typography>
          </Box>

          <Divider />

            <Box
                flex={1}
                display="flex"
                flexDirection="column"
            >
                <Box sx={{ textAlign: 'center', padding: 2 }}>
                    <Typography>Análise das medidas do dia:  <span style={{ color: '#5b60f6', fontWeight: 700 }}>{new Date(created_at).toLocaleDateString()}</span></Typography>
                </Box>

                <Box sx={{ textAlign: 'left', padding: 2 }}>
                    <Typography fontSize="13px">{analise}</Typography>
                </Box>
            </Box>

        </Box>
      </Drawer>
    </>
  );
};
