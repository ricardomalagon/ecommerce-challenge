import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      background: string;
      white: string;
      black: string;
      doveGray: string;
      silver: string;
      dustyGray: string;
    };
  }
}
