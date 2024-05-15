import React from "react";
import { Avatar, SxProps, Theme } from "@mui/material";
interface IProps {
  sx?: SxProps<Theme>;
}
const AvatarComponent: React.FC<IProps> = (props) => {
  console.log(props);
  const { sx } = props;
  console.log({ ...sx });
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
