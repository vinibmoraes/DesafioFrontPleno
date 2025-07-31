// src/routes/Layout/index.tsx
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../pages/Inicio/components/HeaderMain";
import Sidebar from "../../pages/Inicio/components/Sidebar";
import { useLayout } from "./useLayout";
import themes from "../../themes/ThemesExport"; // importa seu dicionário de temas

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { menuOpen, headerHeight, headerRef, toggleMenu } = useLayout();
  const location = useLocation();
  const currentPath = location.pathname;

  const theme = themes[currentPath as keyof typeof themes] || themes["/"]; // fallback para mainTheme

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Header onMenuClick={toggleMenu} headerRef={headerRef} />
        <Sidebar open={menuOpen} onClose={toggleMenu} headerHeight={headerHeight} />
        <Box component="main" p={3} mt={`${headerHeight}px`}>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
