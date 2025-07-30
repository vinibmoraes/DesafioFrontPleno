import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  onClick: () => void;
};

const MenuButton = ({ onClick }: Props) => {
  return (
    <IconButton edge="start" color="inherit" onClick={onClick}>
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;
