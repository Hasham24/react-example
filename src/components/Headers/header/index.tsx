import React from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBackSharp } from "react-icons/io5";
import { Box, Button, Typography } from "@mui/material";

interface IHeader {
  step: number;
  title: string;
}

const Header: React.FC<IHeader> = ({ title = "", step = 1 }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: { md: "10px 20px", sm: "0px" },
        backgroundColor: "transparent", // Optional: add background color
      }}
    >
      <Button
        onClick={() => navigate(-1)}
        startIcon={<IoChevronBackSharp color="#8692A6" size={20} />}
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "transparent",
          border: 0,
          padding: 0,
          "&:hover": {
            backgroundColor: "transparent", // Prevent background change on hover
          },
        }}
      >
        <Typography
          sx={{
            color: "#8692A6",
            marginLeft: "5px",
            fontSize: "16px",
            fontFamily: "inter-semibold",
          }}
        >
          Back
        </Typography>
      </Button>
      <Box>
        <Typography
          sx={{
            marginBottom: 0,
            color: "#bdbdbd",
            fontSize: "14px",
            fontFamily: "inter-Medium",
            textAlign: "center",
          }}
        >
          {`STEP 0${step}/03`}
        </Typography>
        <Typography
          sx={{
            marginTop: "2px",
            fontSize: "16px",
            color: "#8692a6",
            fontFamily: "inter-semibold",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
