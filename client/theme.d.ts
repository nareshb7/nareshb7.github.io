import { Palette, PaletteOptions } from '@mui/material/styles';
export interface ThemeType {
    palette: {
      mode: Mode,
      primary: {
        dark: string;
        main: string;
        light: string;
      },
      neutral: {
        dark: string;
        main: string;
        mediumMain: string;
        medium: string;
        light: string;
      },
      background: {
        default: string;
        alt: string;
      },
    },
    typography: {
      fontFamily: string;
      fontSize: number,
      h1: {
        fontFamily: string;
        fontSize: number,
      },
      h2: {
        fontFamily: string;
        fontSize: number,
      },
      h3: {
        fontFamily: string;
        fontSize: number,
      },
      h4: {
        fontFamily: string;
        fontSize: number,
      },
      h5: {
        fontFamily: string;
        fontSize: number,
      },
      h6: {
        fontFamily: string;
        fontSize: number,
      },
    },
  }

declare module '@mui/material/styles' {
  interface Palette extends ThemeType["palette"] {

  }

  interface PaletteOptions extends ThemeType["palette"] {
    
  }
}
