import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { loginUsuario } from "../services/api/autenticacao/AuthService";
import { armazenarLS, consultarLS, excluirLS } from "../utils/localstorage";
import { IEditUsuarioProps, ILoginUsuarioProps, IUsuariosProps } from "../types/users";
import { useNavigate } from "react-router-dom";
import { IAuthContextProps } from "../types/contexts";
import { updateById } from "../services/api/usuarios/UsuariosService";

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as IAuthContextProps);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  
  const navigate = useNavigate()
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<IUsuariosProps | undefined>();
  const [isReady, setisReady] = useState(false);

  useEffect(() => {
    const tkn = consultarLS("token");
    const user = consultarLS("user");

    if (!!tkn && !!user) {
      setToken(tkn)
      setUser(JSON.parse(user))
    }
    setisReady(true)
  }, []);

  const login = async (dados: ILoginUsuarioProps) => {
    await loginUsuario(dados)
      .then((res) => {
        if (res) {
          armazenarLS("token", res.token.token);
          armazenarLS("perfil", res.user.perfil)
          armazenarLS("user", JSON.stringify(res.user))
          setToken(res.token.token)
          setUser(res.user)
          navigate('/')
        }
      })
  };

  const reativar = async (usuarioAativar: IEditUsuarioProps) => {
    await updateById(token, usuarioAativar)
      .then((res) => {
        console.log(res)
        if (res) {
          console.log(res.data)
          console.log(JSON.stringify(res.data))
          armazenarLS('user', JSON.stringify(res.data))
          setUser(res.data)
          navigate('/')
        }
      })
  }

  const logout = () => {
    excluirLS('token')
    excluirLS('perfil')
    excluirLS('user')
    setToken('')
    navigate('/login')
  }

  

  const isAuthenticated = () => {
    return !!token
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        token,
        logout,
        user,
        reativar
      }}
    >
      {isReady ? children : null}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
