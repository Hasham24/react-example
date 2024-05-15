import React, { ButtonHTMLAttributes } from "react";
import { Button as MuiButton } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  sx?: SxProps<Theme>;
  onClick?: () => void;
}

const Button: React.FC<IProps> = (props) => {
  const { title, sx, onClick } = props;
  return (
    <MuiButton
      onClick={onClick}
      sx={{
        maxWidth: { sm: "426px", xs: "355px" },
        width: "100%",
        marginTop: 3,
        padding: "15px 15px 15px 0px",
        borderRadius: 1,
        borderWidth: 0,
        borderColor: "#1565D8",
        textTransform:'capitalize',  
        color: "#fff",
        fontSize: {
          sm: "9px",
          md: "14px",
        },
        fontFamily: "interRegular",
        backgroundColor: "#1565D8",
        "&:hover": {
          backgroundColor: "#135bb5", // Darker shade on hover
        },
        ...sx,
      }}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
