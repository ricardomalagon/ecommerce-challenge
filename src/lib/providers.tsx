"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import StyledComponentsRegistry from "@/lib/registry";
import theme from "@/lib/theme";

type Props = {
  children: ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  );
}
