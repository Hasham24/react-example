import React from "react";
import { Typography } from "@mui/material";
import { IText } from "../interface";

const Heading: React.FC<IText> = (props) => {
  const { title = "" } = props;
  return (
    <Typography
      sx={{
        fontSize: { md: "30px", xs: "20px" },
        fontFamily: "interBold",
        color: "#000000",
        textAlign: { md: "start", xs: "center" },
      }}
    >
      {title}
    </Typography>
  );
};
export default Heading;
