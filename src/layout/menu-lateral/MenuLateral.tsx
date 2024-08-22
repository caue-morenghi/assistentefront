import {
  Box,
  Divider,
  Drawer,
  List,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useDrawerContext } from "../../contexts";
import { Outlet } from "react-router-dom";
import { ListItemLink } from "./ListItemLink";
import { ToggleThemeButton } from "./ToggleThemeButton";
import PopupUser from "./PopupUser";
import { useAuth } from "../../contexts/AuthContext";

export const MenuLateral = () => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm")); //se a tela estiver abaixo de sm, smDown = true

  const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

  const { user } = useAuth();

  return (
    <>
      <Drawer
        onClose={toggleDrawerOpen}
        open={isDrawerOpen}
        variant={smDown ? "temporary" : "permanent"}
        anchor="left"
      >
        <Box
          width={theme.spacing(28)}
          height="100%"
          display="flex"
          flexDirection="column"
        >
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            gap={1}
          >
            <PopupUser />
            <Typography>{user?.username}</Typography>
          </Box>

          <Divider />

          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <List component="nav">
              <ListItemLink
                icon="home"
                label="Página Inicial"
                onClick={toggleDrawerOpen}
                to="/"
              />
              <ListItemLink
                icon="person"
                label="Usuários"
                onClick={toggleDrawerOpen}
                to="/usuarios"
              />
            </List>
            <ToggleThemeButton />
          </Box>
        </Box>
      </Drawer>

      <Box
        marginLeft={smDown ? 0 : theme.spacing(28)}
      >
        <Outlet />
      </Box>
    </>
  );
};
