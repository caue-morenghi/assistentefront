import { Button } from "@mui/material";
import { useThemeContext } from "../../contexts";

export const ToggleThemeButton = () => {
  const { themeName, toggleTheme } = useThemeContext();

  return (
    <>
      {themeName === "light" ? (
        <Button variant="contained" sx={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '.2em' }} onClick={toggleTheme}>Tema Escuro</Button>
      ) : (
        <Button variant="contained" sx={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '.5em' }} onClick={toggleTheme}>Tema Escuro</Button>
      )}
    </>
  );
};
