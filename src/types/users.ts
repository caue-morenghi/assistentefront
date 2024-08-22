export type ICampoRegistroProps = {
  children: React.ReactNode;
};

export type IEditUsuarioProps = {
  id: number | undefined;
  email: string | undefined;
  username: string | undefined;
  perfil: number | undefined
  status: number | undefined
};

export type IUsuarioProps = {
  id: number;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  usuario: IEditUsuarioProps
  status: number
};

export type IUsuarioEditado = {
  usuario: IEditUsuarioProps;
};

export type ILoginUsuarioProps = {
  email: string;
  password: string;
};

export type IUsuariosProps = {
  id: number;
  email: string;
  username: string;
  perfil: number;
  status: number;
  created_at: string;
  updated_at: string;
};

export type ICadastroUsuarioProps = {
  username: string;
  email: string;
  password: string;
  perfil: number;
};

type ITokenProps = {
  token: string
  type: string
}

export type ILoginPromiseProps = {
  user: IUsuariosProps
  token: ITokenProps
}

export type TEditUsuario = {
  feito_por: number | undefined
  descricao: string
}

export type TEditUsuarioResponse = {
  id: number
  feito_por: number
  descricao: string
  feito_em: string
}
