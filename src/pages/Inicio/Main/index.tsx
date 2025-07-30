import { useEffect, useRef, useState } from "react";
import Header from "../../Inicio/components/HeaderMain";
import Sidebar from "../../Inicio/components/Sidebar";
import { Box } from "@mui/material";

const MainPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64); // fallback
  const headerRef = useRef<HTMLElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    if (!headerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.target === headerRef.current) {
          setHeaderHeight(entry.contentRect.height);
        }
      }
    });

    resizeObserver.observe(headerRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <Box>
      <Header onMenuClick={toggleMenu} headerRef ={headerRef} />
      <Sidebar open={menuOpen} onClose={toggleMenu} headerHeight={headerHeight} />
      <Box p={3} mt={`${headerHeight}px`}>
        <h1>Bem-vindo!</h1>
      </Box>
    </Box>
  );
};

export default MainPage;
