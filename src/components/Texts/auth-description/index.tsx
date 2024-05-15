import React from "react";
import { Typography } from "@mui/material";
import { IText } from "../interface";

const AuthDescriptionText: React.FC<IText> = (props) => {
  const { title = "" } = props;
  return (
    <Typography
      sx={{
        fontSize: { sm: "18px", xs: "14px" },
        fontFamily: "interLight",
        color: "#8692A6",
        maxWidth: "411px",
        textAlign: { sm: "start", xs: "center" },
      }}
    >
      {title}
    </Typography>
  );
};
export default AuthDescriptionText;
