"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps & { children: React.ReactNode }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
