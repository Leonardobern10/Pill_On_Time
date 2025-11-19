import { ThemeProps } from "./ThemeProps";

export const lightTheme: ThemeProps = {
  primary: {
    background: "#1957D2", // Azul forte (mantido)
    text: "#79A6FF", // Azul claro (mantido)
  },
  secondary: {
    background: "#3E7187", // Azul petróleo (mantido)
    text: "#7AD5FD", // Azul claro (mantido)
  },
  alert: {
    background: "#CEB983", // Amarelo areia (mantido)
    text: "#EC8A00", // Laranja escuro (mantido)
  },
  success: {
    background: "#3E8754", // Verde forte (mantido)
    text: "#79FFA1", // Verde claro (mantido)
  },
  error: {
    background: "#873E3E", // Vermelho queimado (mantido)
    text: "#FF7474", // Vermelho claro (mantido)
  },
  paper: {
    background: "#D9D9D9", // Cinza claro (mantido)
    text: "#0D0D0D", // Preto suave (normalizado)
  },
  light: {
    background: "#CECECE", // Cinza médio (mantido)
    text: "#8f8d8dff", // Preto suave (mantido e padronizado)
  },
  dark: {
    background: "#0D0D0D", // Preto suave (mantido)
    text: "#CECECE", // Cinza claro (mantido)
  },
};

export const darkTheme: ThemeProps = {
  primary: {
    background: "#000000", // Preto
    text: "#FFFFFF", // Branco
  },
  secondary: {
    background: "#3E7187", // Azul petróleo (mantido)
    text: "#082427", // A versão correta do tom original (sem alpha inválido)
  },
  alert: {
    background: "#CE7C00", // Laranja queimado (aprox. do original)
    text: "#FFFFFF",
  },
  success: {
    background: "#3E8754", // Verde forte (mantido do lightTheme)
    text: "#FFFFFF",
  },
  error: {
    background: "#873E3E", // Vermelho queimado (mantido do lightTheme)
    text: "#FFF",
  },
  paper: {
    background: "#333333", // Cinza escuro suave
    text: "#FFFFFF",
  },
  light: {
    background: "#222222", // Cinza escuro
    text: "#ffffff78",
  },
  dark: {
    background: "#000000", // Preto
    text: "#FFFFFF",
  },
};
