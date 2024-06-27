import React from "react";
import { Typography, TypographyProps } from "@mui/material";

const Heading: React.FC<TypographyProps> = (props) => {
  const { title = "", sx } = props;
  return (
    <Typography
      sx={{
        fontSize: { md: "30px", xs: "20px" },
        fontFamily: "interBold",
        color: "#000000",
        textAlign: { md: "start", xs: "center" },
        ...sx,
      }}
    >
      {title}
    </Typography>
  );
};
export default Heading;
