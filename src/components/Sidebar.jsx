import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = ({ drawerOpen, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <List className="w-56 p-4 bg-white text-gray-900">
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Shop" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
