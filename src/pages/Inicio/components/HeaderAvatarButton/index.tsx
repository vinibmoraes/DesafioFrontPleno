import { IconButton, Avatar, Box } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CustomText from "../../../../components/CustomText";

const AvatarButton = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <CustomText variant="body1" sx={{ fontWeight: "bold", color: "white" }}>Academia</CustomText>
      <IconButton >
        <Avatar>
          <PersonIcon />
        </Avatar>
      </IconButton>
    </Box>
  );
};

export default AvatarButton;
