import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { MenuLateral } from "../layout/menu-lateral/MenuLateral";
import { Usuarios } from "../pages/Usuarios";
import { ProtectedRoute } from "./ProtectedRoute";
import { App } from "../App";
import { Register } from "../pages";
import { UsuariosInativos } from "../pages/UsuariosInativos";
import { Reativacao } from "../pages/Reativacao";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MenuLateral />,
        children: [
          {
            path: "/",
            element: (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            ),
          },
          {
            path: "/usuarios",
            element: (
              <ProtectedRoute>
                <Usuarios />
              </ProtectedRoute>
            ),
          },
          {
            path: "/usuariosinativos",
            element: (
              <ProtectedRoute>
                <UsuariosInativos />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: (
          <ProtectedRoute>
            <Register />
          </ProtectedRoute>
        ),
      },
      {
        path: "/reativacao",
        element: <Reativacao />,
      },
    ],
  },
]);
