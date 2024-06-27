import React from "react";
import { Avatar, AvatarProps } from "@mui/material";
const AvatarComponent: React.FC<AvatarProps> = (props) => {
  const { sx } = props;
  return (
    <Avatar
      src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=3262&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="profile pic"
      sx={{
        height: "55px",
        width: "55px",
        borderRadius: "17px",
        ...sx,
      }}
    />
  );
};
export default AvatarComponent;
