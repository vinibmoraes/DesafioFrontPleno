import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  onClick: () => void;
};

const MenuButton = ({ onClick }: Props) => {
  return (
    <IconButton edge="start" onClick={onClick} sx={{ color: "white" }}>
      <MenuIcon />
    </IconButton>
  );
};

export default MenuButton;
