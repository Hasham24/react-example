import React from "react";
import { Box, ButtonBase, Typography, useMediaQuery, Divider, Link } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Button, Heading, TextInput } from "../../../components";


const Security: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  return (
    <Box sx={{ padding: { md: "32px", xs: "20px" } }}>
      <Heading
        title="Security"
        sx={{
          fontSize: { md: "32px", xs: "20px" },
          textAlign: "start",
        }}
      />
      <Box sx={{ marginTop: "10px", alignItems: "center" }}>
        <Heading
          title="Email address"
          sx={{
            fontSize: { md: "20px", xs: "14px" },
            flexDirection: isMobile || isTablet ? 'column' : 'row',
            textAlign: "start",
            mt: 2
          }}
        />
        <Box sx={{
          mt: 2,
          display: 'flex',
          maxWidth: '597px',
          flexDirection: isMobile || isTablet ? 'column' : 'row',
          alignItems: isMobile || isTablet ? 'flex-start' : 'center',
          justifyContent: 'space-between'
        }}>
          <Typography component={'span'}
            sx={{
              fontSize: { md: "18px", xs: "14px" },
              fontWeight: '400'
            }}
          >Your email address is <Typography sx={{
            fontSize: { md: "18px", xs: "14px" },
            fontWeight: '700'
          }} component={'span'}>emailis@example.com</Typography></Typography>
          <ButtonBase sx={{
            color: "#1565D8", fontSize: { md: "18px", xs: "14px" },
            fontWeight: isMobile || isTablet ? '500' : '400',
            mt: isMobile || isTablet ? 1 : 0
          }}>
            Change
          </ButtonBase>
        </Box>
        <Divider sx={{ maxWidth: '597px', mt: 2, borderWidth: isMobile || isTablet ? 0 : 0.5 }} />
        <Heading
          title="Password"
          sx={{
            fontSize: { md: "20px", xs: "14px" },
            flexDirection: isMobile || isTablet ? 'column' : 'row',
            textAlign: "start",
            mt: 2
          }}
        />
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
            label={"New password"}
            type={"text"}
            id={"newPassword"}
            name={"newPassword"}
            placeholder={"Enter new password"}
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
            label={"Current password"}
            type={"text"}
            id={"currentPassword"}
            name={"currentPassword"}
            placeholder={"Enter current password"}
          />
        </Box>
        <Box sx={{
          mt: 2,
          display: 'flex',
          maxWidth: '597px',
          flexDirection: isMobile || isTablet ? 'column' : 'row',
          alignItems: isMobile || isTablet ? 'flex-start' : 'center',
        }}>
          <Typography component={'span'}
            sx={{
              fontSize: { md: "16px", xs: "14px" },
              fontWeight: '400',
            }}
          >Can’t remember your current password?</Typography>
          <ButtonBase sx={{
            color: "#1565D8", fontSize: { md: "16px", xs: "14px" },
            fontWeight: '400',
            mt: isMobile || isTablet ? 1 : 0,
            ml: isMobile || isTablet ? 0 : 1
          }}>
            Reset your password
          </ButtonBase>
        </Box>
        <Button
          title="Save password"
          sx={{
            mt: 2,
            maxWidth: { md: "178px", xs: "101px" },
            padding: {
              xs: "15px, 30px, 15px, 30px",
              md: "8.53px, 17.05px, 8.53px, 17.05px",
            },
            borderRadius: { md: "10px", xs: "5px" },
          }}
        />
        <Divider sx={{ maxWidth: '597px', mt: 2, borderWidth: isMobile || isTablet ? 0 : 0.5 }} />
        <Heading
          title="Delete account"
          sx={{
            fontSize: { md: "20px", xs: "14px" },
            flexDirection: isMobile || isTablet ? 'column' : 'row',
            textAlign: "start",
            mt: 2
          }}
        />
        <Box sx={{ maxWidth: '597px', mt: 5 }}>
          <Typography sx={{ color: "##000000", fontSize: { md: "18px", xs: "14px" }, }}>
            Would you like to delete your account?
          </Typography>
          <Typography sx={{ color: "##000000", fontSize: { md: "18px", xs: "14px" }, }} >
            This account contains 1388 posts. Deleting your account will remove all the content associated with it.
          </Typography>
        </Box>
        <Link href="#" underline="always" color={'#EE4878'} sx={{ mt: 10, color:'#EE4878' }}>
        I want to delete my account
        </Link>
      </Box>
    </Box>
  );
};
export default Security;
