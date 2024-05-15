import React from "react";
import { Checkbox as MuiCheckbox, FormControlLabel, Box } from "@mui/material";

const CheckBox: React.FC<any> = (props) => {
  return (
    <Box sx={{ marginTop: 1, display: "flex", alignItems: "center" }}>
      <FormControlLabel
        control={<MuiCheckbox id="agree" name="agree" />}
        label="I Agree to Terms & Conditions"
        sx={{
          ".MuiFormControlLabel-label": {
            fontFamily: "interRegular",
            marginInline: 1,
            fontSize: 12,
            color: "#696F79",
          },
        }}
      />
    </Box>
  );
};

export default CheckBox;
