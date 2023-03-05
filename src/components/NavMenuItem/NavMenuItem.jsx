import { MenuItem, NavLink } from "./NavMenuItem.styles";

const NavMenuItem = ({ path, icon }) => {
  return (
    <MenuItem>
      <NavLink to={path}>{icon}</NavLink>
    </MenuItem>
  );
};

export default NavMenuItem;
