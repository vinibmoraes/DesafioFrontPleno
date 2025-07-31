import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import HouseIcon from "@mui/icons-material/House";
import { Link } from "react-router-dom";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  headerHeight: number;
};

const Sidebar = ({ open, onClose, headerHeight }: SidebarProps) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
      PaperProps={{
        sx: {
          top: `${headerHeight}px`,
          height: `calc(100% - ${headerHeight}px)`,
          width: 250,
        },
      }}
    >
      <List>
      <ListItem component={Link} to="/" onClick={onClose}>
          <ListItemIcon><HouseIcon /></ListItemIcon>
          <ListItemText primary="Início" />
        </ListItem>
        <ListItem component={Link} to="/clientes" onClick={onClose}>
          <ListItemIcon><PeopleIcon /></ListItemIcon>
          <ListItemText primary="Clientes" />
        </ListItem>
        <ListItem component={Link} to="/agenda" onClick={onClose}>
          <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
          <ListItemText primary="Agenda" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
