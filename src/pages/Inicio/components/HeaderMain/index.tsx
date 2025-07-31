import { AppBar, Toolbar, Box } from "@mui/material";
import HeaderLogo from "../../../Inicio/components/HeaderLogo";
import MenuButton from "../../../Inicio/components/MenuButton";
import SearchInput from "../../../Inicio/components/HeaderSearchInput";
import AvatarButton from "../../../Inicio/components/HeaderAvatarButton";
import type { RefObject } from "react";

type HeaderProps = {
  onMenuClick: () => void;
  headerRef: RefObject<HTMLElement | null>;
};

const HeaderMain = ({ onMenuClick, headerRef }: HeaderProps) => {
  return (
    <AppBar position="fixed" color="default" elevation={0} ref={headerRef}>
      <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2 }}>
        <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
          <MenuButton onClick={onMenuClick} />
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <HeaderLogo />
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <SearchInput />
        </Box>
        <AvatarButton />
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMain;