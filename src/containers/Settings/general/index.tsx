import React from "react";
import { Box } from "@mui/material";
import { Avatar, Button, Heading } from "../../../components";

const General: React.FC = () => {
  return (
    <Box sx={{ padding: { md: "32px", xs: "20px" } }}>
      <Heading
        title="General"
        sx={{
          fontSize: { md: "32px", xs: "20px" },
          textAlign: "start",
        }}
      />
      <Box sx={{ display: "flex", marginTop: "10px", alignItems: "center" }}>
        <Avatar
          sx={{
            height: { md: "150px", xs: "85px" },
            width: { md: "150px", xs: "85px" },
            borderRadius: { md: "30px", xs: "17px" },
            border: "2px solid #1565D8",
          }}
        />
        <Box sx={{ marginInline: "12px" }}>
          <Button
            title="Change picture"
            sx={{
              maxWidth: { md: "178px", xs: "101px" },
              padding: {
                xs: "15px, 30px, 15px, 30px",
                md: "8.53px, 17.05px, 8.53px, 17.05px",
              },
              borderRadius: { md: "10px", xs: "5px" },
            }}
          />
          <Button
            title="Delete picture"
            sx={{
              maxWidth: { md: "178px", xs: "101px", marginTop: "10px" },
              padding: {
                xs: "15px, 30px, 15px, 30px",
                md: "8.53px, 17.05px, 8.53px, 17.05px",
              },
              borderRadius: { md: "10px", xs: "5px" },
              backgroundColor: "#FFFFFF",
              color: "#202142",
              border: "1px solid #A4A4CB",
              marginTop: "15px",
            }}
          />
        </Box>
      </Box>
      <Box></Box>
    </Box>
  );
};
export default General;
