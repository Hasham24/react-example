import React from "react";
import { HiOutlinePlus } from "react-icons/hi";
import { FaDribbble } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { Box, ButtonBase, List, ListItem, ListItemText, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Heading, Label, TextInput } from "../../../components";
import useGeneral from './useGeneral';


const General: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const { onlineData } = useGeneral()
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
      <Box
        sx={{
          display: "flex",
          marginTop: "10px",
          flexDirection: isMobile || isTablet ? 'column' : 'row',
          justifyContent: 'space-between',
          maxWidth: "590px",
        }}
      >
        <TextInput
          styles={{
            container: {
              width: isMobile || isTablet ? '100%' : '277px',
            },
            label: {
              fontSize: '16px', color: "#000",
            }
          }}
          label={"First name"}
          type={"text"}
          id={"firstName"}
          name={"firstName"}
          placeholder={"Enter First Name"}
        />
        <TextInput
          styles={{
            container: {
              width: isMobile || isTablet ? '100%' : '277px',
            },
            label: {
              fontSize: '16px', color: "#000",
            }
          }}
          label={"Last name"}
          type={"text"}
          id={"lastName"}
          name={"lastName"}
          placeholder={"Enter Last Name"}
        />
      </Box>
      <TextInput
        styles={{
          container: {
            maxWidth: '590px',
          },
          label: {
            fontSize: '16px', color: "#000",
          }
        }}
        label={"Location"}
        type={"text"}
        id={"location"}
        name={"location"}
        placeholder={"Enter location"}
      />
      <TextInput
        styles={{
          container: {
            maxWidth: '590px',
          },
          label: {
            fontSize: '16px', color: "#000",
          }
        }}
        label={"Profession"}
        type={"text"}
        id={"profession"}
        name={"profession"}
        placeholder={"Enter Profession"}
      />
      <TextInput
        styles={{
          container: {
            maxWidth: '590px',
          },
          label: {
            fontSize: '16px', color: "#000",
          },
          inputBox: {
            height: isMobile || isTablet ? '113px' : '191px',
            alignItems: 'flex-start'
          }
        }}
        label={"Bio"}
        type={"text"}
        id={"bio"}
        name={"bio"}
        placeholder={"Enter Bio"}
      />
      <Box sx={{ mt: 2 }}>
        <Label title="Online presence" sx={{ fontSize: '24px', color: "#000", fontFamily: 'inter', fontWeight: '700' }} />
        <List>
          {onlineData.map((item, index) => (
            <ListItem key={index} sx={{
              maxWidth: '590px',
              display: "flex",
              alignItems: "center",
              border: "1px solid #8692a6",
              borderRadius: "6px",
              mt: 2,
              "&:focus-within": {
                borderColor: "#1565d8",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.11)",
              },
            }}>
              {item?.link.includes('instagram') ? <IoLogoInstagram color="#202142" /> : <FaDribbble color="#202142" />}
              <ListItemText primary={item.link} sx={{ ml: '10px', fontSize: '18px', color: '#202142' }} />
            </ListItem>
          ))}
        </List>
        <ButtonBase sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <HiOutlinePlus color="#201CCD" />
          <Typography sx={{ ml: 2 }} color="#201CCD">Add other</Typography>
        </ButtonBase>

      </Box>

    </Box>
  );
};
export default General;
