import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Card,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Link
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Button, Heading } from "../../../components";


const data = [
  { date: 'Oct. 21, 2021', type: 'Pro Annual' },
  { date: 'Aug. 21, 2021', type: 'Pro Portfolio' },
  { date: 'July. 21, 2021', type: 'Sponsored Post' },
  { date: 'Jun. 21, 2021', type: 'Sponsored Post' },
];

const Billing: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  return (
    <Box sx={{ padding: { md: "32px", xs: "20px" } }}>
      <Heading
        title="Billing"
        sx={{
          fontSize: { md: "32px", xs: "20px" },
          textAlign: "start",
        }}
      />
      <Box sx={{
        marginTop: "10px",
        display: 'flex',
        flexDirection: isMobile || isTablet ? 'column' : 'row',
      }}>
        <Box sx={{ maxWidth: '622px' }}>
          <Heading
            title="Order History"
            fontFamily='Inter'
            sx={{
              fontSize: { md: "20px", xs: "14px" },
              flexDirection: isMobile || isTablet ? 'column' : 'row',
              textAlign: "start",
              mt: 2
            }}
          />
          <Typography sx={{ color: '#62618F', mt: 2 }}>Manage billing information and view receipts</Typography>
          <Box sx={{ width: '622px', mx: 'auto', my: 2 }}>
            <TableContainer component={Paper} sx={{ width: '100%', boxShadow: 'none' }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><Typography variant="subtitle2">Date</Typography></TableCell>
                    <TableCell><Typography variant="subtitle2">Type</Typography></TableCell>
                    <TableCell><Typography variant="subtitle2">Receipt</Typography></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.type}</TableCell>
                      <TableCell>
                        <Button sx={{
                          color: '#1A194D',
                          height: '43px',
                          border: 1,
                          backgroundColor: '#fff',
                          borderColor: '#CBCBD9',
                          "&:hover": {
                            backgroundColor: "#fff", // Darker shade on hover
                          },
                        }}
                          title="Download" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ marginTop: 2 }}>
              <Link href="#" underline="none">Load more</Link>
            </Box>
          </Box>
          <Heading
            title="Payment Method"
            fontFamily='Inter'
            sx={{
              fontSize: { md: "20px", xs: "14px" },
              flexDirection: isMobile || isTablet ? 'column' : 'row',
              textAlign: "start",
              mt: 2
            }}
          />
          <Typography sx={{ color: '#62618F', mt: 1 }}>Manage billing information and view receipts</Typography>
        </Box>
        <Card sx={{
          backgroundColor: '#1565D8',
          borderRadius: { xs: '11.82px', md: '16px' }, // Adjust border radius for mobile and tablet
          p: { xs: '16px', md: '32px' },
          display: 'flex',
          maxHeight: '170px',
          mt: isMobile || isTablet ? 2 : 0,
          ml: isMobile || isTablet ? 0 : 10,
          justifyContent: isMobile || isTablet ? 'space-between' : 'flex-start',
          flexDirection: { xs: 'row', md: 'column' } // Adjust layout direction for mobile and tablet
        }}>
          <Box>
            <Typography variant="body1" color="#fff" sx={{
              fontWeight: '500',
              fontSize: { xs: '11.82px', md: '16px' },
              fontFamily: 'Inter'
            }}>
              Your plan
            </Typography>
            <Typography variant="h5" color="#fff" sx={{
              marginY: 1,
              fontWeight: '700',
              fontSize: { xs: '17.73px', md: '24px' },
              fontFamily: 'Inter'
            }}>
              Pro Annual
            </Typography>
            <Typography variant="body2" color="#fff" sx={{
              mt: 1,
              fontWeight: '500',
              fontSize: { xs: '10.35px', md: '14px' },
              fontFamily: 'Inter'
            }}>
              Renews on Nov. 2021
            </Typography>
          </Box>
          <Button sx={{
            alignSelf: { xs: 'center', md: 'stretch' },
            alignItems: 'center',
            border: 1,
            width: isMobile || isTablet ? 'Hug (136.65px)' : '100%',
            borderRadius: '8px',
            mt: 2,
            padding: "12px 16px 12px 16px",
            borderColor: 'rgba(255, 255, 255, 0.5)',
            color: '#fff',
          }}
            title="Cancel subscription"
          />
        </Card>
      </Box>
    </Box>
  );
};
export default Billing;
