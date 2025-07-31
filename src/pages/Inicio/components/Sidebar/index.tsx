import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import DateRangeIcon from '@mui/icons-material/DateRange';
import HomeIcon from "@mui/icons-material/Home";
import { Link, useLocation } from "react-router-dom";

import mainTheme from "../../../../themes/PageMainTheme";
import agendaTheme from "../../../../themes/AgendaTheme";
import clientesTheme from "../../../../themes/ClientesTheme";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
  headerHeight: number;
};

const Sidebar = ({ open, onClose, headerHeight }: SidebarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getItemStyle = (path: string) => ({
    backgroundColor: currentPath === path ? '#eeeeee' : 'transparent',
    '&:hover': {
      backgroundColor: '#eeeeee',
      cursor: 'pointer',
    },
  });

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
        <ListItem component={Link} to="/" onClick={onClose} sx={getItemStyle("/")}>
          <ListItemIcon>
            <HomeIcon htmlColor={mainTheme.palette.primary.main} />
          </ListItemIcon>
          <ListItemText primary="Início" sx={{ color: "#616161" }} />
        </ListItem>
        <ListItem component={Link} to="/clientes" onClick={onClose} sx={getItemStyle("/clientes")}>
          <ListItemIcon>
            <PeopleIcon htmlColor={clientesTheme.palette.primary.main} />
          </ListItemIcon>
          <ListItemText primary="Clientes" sx={{ color: "#616161" }} />
        </ListItem>
        <ListItem component={Link} to="/agenda" onClick={onClose} sx={getItemStyle("/agenda")}>
          <ListItemIcon>
            <DateRangeIcon htmlColor={agendaTheme.palette.primary.main} />
          </ListItemIcon>
          <ListItemText primary="Agenda" sx={{ color: "#616161" }} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
