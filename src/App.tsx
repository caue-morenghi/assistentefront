import { Outlet } from "react-router-dom";
import { AppThemeProvider } from "./contexts/ThemeContext";
import { DrawerProvider } from "./contexts";
import { AuthProvider } from "./contexts/AuthContext";

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <DrawerProvider>
          <Outlet />
        </DrawerProvider>
      </AppThemeProvider>
    </AuthProvider>
  );
};
