import { IconButton, Avatar } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const AvatarButton = () => {
  return (
    <IconButton>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </IconButton>
  );
};

export default AvatarButton;
