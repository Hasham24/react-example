import React from "react";
import { Typography, TypographyProps } from "@mui/material";

const Label: React.FC<TypographyProps> = (props) => {
    const { title = "", sx } = props;
  return (
    <Typography
        component="label"
        sx={{ fontFamily: "interMedium", fontSize: 15, color: "#696f79",  ...sx}}
      >
        {title}
      </Typography>
  );
};
export default Label;
