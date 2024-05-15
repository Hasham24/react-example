import React from "react";
import { Button, Box } from "@mui/material";

interface IProps {
  title: string;
  Icon: JSX.Element;
}

const SocialButton: React.FC<IProps> = ({ title, Icon }) => {
  return (
    <Button
      startIcon={Icon}
      sx={{
        maxWidth: "426px",
        borderRadius: "1px",
        marginTop: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "15px 40px",
        textTransform:'capitalize',  
        boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.1)",
        borderColor: "#fff",
        color: "#000",
        backgroundColor: "#fff",
        fontSize: {
          sm: "9px",
          md: "14px",
        },
        fontFamily: "interRegular",
        "&:hover": {
          backgroundColor: "#f0f0f0", // Optional: Change background on hover
        },
      }}
    >
      <Box
        component="span"
        sx={{
          flex: 1,
          textAlign: "center",
        }}
      >
        {title}
      </Box>
    </Button>
  );
};

export default SocialButton;
