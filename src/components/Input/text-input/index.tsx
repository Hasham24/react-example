import React, { useState } from "react";
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  TextFieldProps,
  SxProps,
  Theme,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Label } from "../../Texts";

interface IProps extends Omit<TextFieldProps, "label"> {
  label: string;
  Icon?: JSX.Element;
  multiline?:boolean;
  styles?: {
    container?: SxProps<Theme>;
    label?: SxProps<Theme>;
    inputBox?: SxProps<Theme>;
    textField?: SxProps<Theme>;
  };
}

const TextInput: React.FC<IProps> = (props) => {
  const { label, id, name, placeholder, type = "", Icon = null, styles = {}, multiline = false } = props;
  const [inputType, setInputType] = useState<string>(type);

  const showPassword = () => {
    setInputType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  return (
    <Box sx={{ mt: 2, ...styles.container }}>
      <Label title={label} sx={{...styles.label}}  />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #8692a6",
          borderRadius: "6px",
          mt: 1,
          p: 1.5,
          "&:focus-within": {
            borderColor: "#1565d8",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.11)",
          },
          ...styles.inputBox,
        }}
      >
        <TextField
          type={inputType}
          id={id}
          name={name}
          placeholder={placeholder}
          fullWidth
          variant="standard"
          multiline={multiline}
          InputProps={{
            disableUnderline: true,
            endAdornment: type === "password" && (
              <InputAdornment position="end">
                <IconButton onClick={showPassword} sx={{ p: 0 }}>
                  {inputType === "text" ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            startAdornment: Icon && (
              <InputAdornment position="start">{Icon}</InputAdornment>
            ),
          }}
          sx={{ fontFamily: "inter-Medium", fontSize: 14, color: "#494949", ...styles.textField }}
        />
      </Box>
    </Box>
  );
};

export default TextInput;
