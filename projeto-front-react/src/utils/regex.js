export const validarEmail = new RegExp(
  "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
);

export const validarSenha = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");
