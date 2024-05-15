import React from "react";
import { Button, Box } from "@mui/material";
import { IAccountButton } from "../interface";

const TextButton: React.FC<IAccountButton> = (props) => {
  const { postfix = "", prefix = "", onClick } = props;
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: "transparent",
        color: "#8692a6",
        fontFamily: "interLight",
        fontSize: { sm: "10", md: "14px" },
        textTransform: "capitalize",
        maxWidth: "426px",
        borderWidth: 0,
        marginTop: "15px",
        "&:hover": {
          backgroundColor: "transparent", // Prevent background change on hover
        },
      }}
    >
      {prefix}
      <Box
        component="span"
        sx={{
          color: "#1565d8",
          marginLeft: 0.5,
        }}
      >
        {postfix}
      </Box>
    </Button>
  );
};

export default TextButton;
