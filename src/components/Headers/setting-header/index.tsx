import React from "react";
import { useLocation } from "react-router-dom";
import { IconButton, Typography, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "../../Images";
interface Props {
  onClick: () => void;
  title?: string;
}
const SettingHeader: React.FC<Props> = (props) => {
  const { onClick } = props;
  const location = useLocation();
  return (
    <Toolbar
      sx={{
        display: {
          xs: "flex",
          sm: "none",
          alignItems: "center",
          justifyContent: "space-between",
        },
      }}
    >
      <IconButton
        color="inherit"
        aria-label="Open drawer"
        edge="start"
        onClick={onClick}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          flex: 1,
          textAlign: "center",
          textTransform: "capitalize",
          fontSize: "18px",
          color: "#212121",
          fontFamily: "interLight",
        }}
      >
        Settings
      </Typography>
      <Avatar sx={{ height: "28px", width: "28px", borderRadius: "14px" }} />
    </Toolbar>
  );
};
export default SettingHeader;
