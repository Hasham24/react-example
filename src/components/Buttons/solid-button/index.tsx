import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";

const Button: React.FC<ButtonProps> = (props) => {
  const { title, sx, ...rest } = props;
  return (
    <MuiButton
      sx={{
        maxWidth: { sm: "426px", xs: "355px" },
        width: "100%",
        padding: "15px 15px 15px 0px",
        borderRadius: 1,
        borderWidth: 0,
        borderColor: "#1565D8",
        textTransform: "capitalize",
        color: "#fff",
        fontSize: {
          xs: "9px",
          md: "14px",
        },
        fontFamily: "interRegular",
        backgroundColor: "#1565D8",
        "&:hover": {
          backgroundColor: "#135bb5", // Darker shade on hover
        },
        ...sx,
      }}
      {...rest}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
