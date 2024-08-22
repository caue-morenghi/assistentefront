import { IEditUsuarioProps, ILoginUsuarioProps, IUsuariosProps } from "./users";

export type IAppDrawerContextProps = {
  children: React.ReactNode;
};

export type IDrawerContextProps = {
  isDrawerOpen: boolean;
  toggleDrawerOpen: () => void;
};

export type IThemeContextProps = {
  themeName: "light" | "dark";
  toggleTheme: () => void;
};

export type IAppThemeProvider = {
  children: React.ReactNode;
};

export type IAuthContextProps = {
  user: IUsuariosProps | undefined
  isAuthenticated: () => boolean;
  login: (dados: ILoginUsuarioProps) => void;
  token: string | null;
  logout: () => void;
  reativar: (usuarioAativar: IEditUsuarioProps) => void
};
