import React from "react";
import { IconButton, Typography, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
interface Props {
  onClick: () => void;
}
const ToolBarComponent: React.FC<Props> = (props) => {
  const { onClick } = props;
  return (
    <Toolbar sx={{ display: { xs: "flex", sm: "none" } }}>
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        edge="start"
        onClick={onClick}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
        Hola
      </Typography>
    </Toolbar>
  );
};
export default ToolBarComponent;
