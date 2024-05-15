import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { FaArrowRight } from "react-icons/fa6";

interface IJoinButton {
  isSelected: boolean;
  title: string;
  description: string;
  Icon: JSX.Element;
  onClick: () => void;
}

const JoinTypeButton: React.FC<IJoinButton> = ({
  isSelected,
  title,
  description,
  Icon,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 2,
        maxWidth: { sm: "426px", xs: "355px" },
        padding: { xs: "5px", sm: "20px" },
        boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.1)",
        border: isSelected
          ? { xs: "1px solid #1565d8", sm: "2px solid #1565d8" }
          : "1px solid",
        borderColor: isSelected ? "#1565d8" : "rgba(0, 0, 0, 0.1)",
        backgroundColor: isSelected ? "#f5f9ff" : "#fff",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: { sm: "50px", xs: "20px" },
          width: { sm: "50px", xs: "20px" },
          borderRadius: "50%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: isSelected ? "#1565d8" : "transparent",
          border: "1px solid #1565d8",
          fontSize: {
            xs: "10px", // Smaller icon for mobile devices
            sm: "20px",
          },
        }}
      >
        {Icon}
      </Box>
      <Box
        sx={{
          flex: 1,
          margin: { xs: "10px 5px", sm: "0 20px" },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "5px", sm: "16px" },
            fontFamily: "interSemiBold",
            color: "#000",
            margin: 0,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            marginTop: "1px",
            fontSize: { xs: "4px", sm: "14px" },
            fontFamily: "interRegular",
            color: "#8692A6",
          }}
        >
          {description}
        </Typography>
      </Box>
      {isSelected && (
        <IconButton
          sx={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: {
              xs: "10px", // Smaller icon for mobile devices
              sm: "20px",
            },
          }}
        >
          <FaArrowRight color={"#1565D8"} />
        </IconButton>
      )}
    </Box>
  );
};

export default JoinTypeButton;
