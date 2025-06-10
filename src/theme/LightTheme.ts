import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const PurpleTheme: ThemeTypes = {
  name: 'PurpleTheme',
  dark: false,
  variables: {
    'border-color': '#1e88e5',
    'carousel-control-size': 10
  },
  colors: {
    primary: '#1e88e5',
    secondary: '#5e35b1',
    info: '#03c9d7',
    success: '#00c853',
    accent: '#FFAB91',
    warning: '#ffc107',
    error: '#f44336',
    lightprimary: '#eef2f6',
    lightsecondary: '#ede7f6',
    lightsuccess: '#b9f6ca',
    lighterror: '#f9d8d8',
    lightwarning: '#fff8e1',
    darkText: '#212121',
    lightText: '#616161',
    darkprimary: '#1565c0',
    darksecondary: '#4527a0',
    borderLight: '#d0d0d0',
    inputBorder: '#787878',
    containerBg: '#eef2f6',
    surface: '#fff',
    'on-surface-variant': '#fff',
    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',
    gray100: '#fafafa',
    primary200: '#90caf9',
    secondary200: '#b39ddb'
  }
};

const OrangeTheme: ThemeTypes = {
  name: 'OrangeTheme',
  dark: false,
  variables: {
    'border-color': '#ff7e00',         // alinha com cor principal
    'carousel-control-size': 10
  },
  colors: {
    primary: '#ff7e00',                // laranja vibrante do logo :contentReference[oaicite:2]{index=2}
    darkprimary: '#e57e2e',            // tom um pouco mais escuro :contentReference[oaicite:3]{index=3}
    lightprimary: '#fff6e5',           // tom bem claro para fundos :contentReference[oaicite:4]{index=4}

    secondary: '#333333',              // cinza escuro neutro
    darksecondary: '#111111',
    lightsecondary: '#f2f2f2',

    info: '#0277BD',                   // azul complementar (boa visibilidade)
    success: '#388E3C',                // verde para sucesso
    warning: '#FDD835',                // amarelo ambar
    error: '#D32F2F',                  // vermelho profundo

    accent: '#ffab91',                 // mantém o accent suave

    lightsuccess: '#C8E6C9',
    lighterror: '#FFCDD2',
    lightwarning: '#FFF8E1',

    darkText: '#212121',
    lightText: '#616161',

    borderLight: '#DDDDDD',
    inputBorder: '#BBBBBB',

    containerBg: '#fff6e5',            // fundo leve em harmonia
    surface: '#FFFFFF',
    'on-surface-variant': '#FFFFFF',

    facebook: '#4267b2',
    twitter: '#1da1f2',
    linkedin: '#0e76a8',

    gray100: '#FAFAFA',

    primary200: '#ffd0b3',             // variação suave do laranja
    secondary200: '#cccccc'
  }
};

export { PurpleTheme, OrangeTheme };
