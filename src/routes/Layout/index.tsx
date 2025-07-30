// src/routes/Layout/index.tsx
import { Box } from "@mui/material";
import { type ReactNode } from "react";
import Header from "../../pages/Inicio/components/HeaderMain";
import Sidebar from "../../pages/Inicio/components/Sidebar";
import { useLayout } from "./useLayout";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  const { menuOpen, headerHeight, headerRef, toggleMenu } = useLayout();

  return (
    <Box>
      <Header onMenuClick={toggleMenu} headerRef={headerRef} />
      <Sidebar open={menuOpen} onClose={toggleMenu} headerHeight={headerHeight} />
      <Box component="main" p={3} mt={`${headerHeight}px`}>
        {children}
      </Box>
    </Box>
  );
};