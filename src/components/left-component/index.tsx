import React from "react";
import { Box, Typography } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { Graphics } from "../../assets";

const LeftComponent: React.FC<any> = (props) => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "space-between",
        display: "flex",
        flex: 1,
        padding: "20px 0px",
        backgroundImage: `url(${Graphics.bgImage})`,
        backgroundSize: "100% 100%",
        height: "100vh",
      }}
    >
      <Box
        component="img"
        src={Graphics.logo}
        alt="logo"
        sx={{
          paddingInline: "82px",
          width: "90px",
          height: "47px",
        }}
      />
      <Box
        sx={{
          paddingInline: "82px",
          maxWidth: "437px",
        }}
      >
        <ImQuotesLeft color="#00DAF7" size={25} />
        <Typography
          sx={{
            fontFamily: "inter-regular",
            color: "#fff",
            lineHeight: "37px",
            fontSize: { sm: "15px", md: "20px" },
            marginY: 2,
          }}
        >
          The passage experienced a surge in popularity during the 1960s when
          Letraset used it on their dry-transfer sheets, and again during the
          90s as desktop publishers bundled the text with their software.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginY: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: "inter-regular",
              color: "#fff",
              marginRight: "10px",
              lineHeight: "37px",
              fontSize: "20px",
            }}
          >
            Vincent Obi
          </Typography>
          <FaCheckCircle size={20} color="#08AD36" />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            marginY: 1,
          }}
        >
          <Box
            component="img"
            src={Graphics.block}
            alt="block"
            sx={{
              height: "33px",
              width: "33px",
            }}
          />
        </Box>
      </Box>
      <Box
        component="img"
        src={Graphics.circle}
        alt="circle"
        sx={{
          height: "120px",
          width: "120px",
        }}
      />
    </Box>
  );
};

export default LeftComponent;
