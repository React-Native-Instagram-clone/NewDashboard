import React from 'react';
import {
  Box,
  Button,
  // IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import Header from '../../components/Header';
import StatBox from '../../components/StatBox';
import LogoutIcon from '@mui/icons-material/Logout';


const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const colors = tokens(theme.palette.mode);
  const handleLogout = () => {
    alert("Logged Out Successfully you will lost your assigned role are u sure u want to logout?")
    localStorage.setItem("signedInUser",JSON.stringify("Superadmin"))
  }
  return (
    <Box m={isMobile ? '10px' : '20px'}>
      {/* HEADER */}
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems={isMobile ? 'flex-start' : 'center'}
      >
        <Header title="UTILITY DASHBOARD" subtitle="Welcome to Utility Dashboard" />

        <Box mt={isMobile ? '10px' : '0'} gap="30px" display="flex">
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: 'bold',
              padding: isMobile ? '8px 15px' : '10px 20px',
            }}
            onClick={handleLogout}
          >
            <LogoutIcon sx={{ mr: isMobile ? '5px' : '10px' }} />
            LogOut
          </Button>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: isMobile ? '12px' : '14px',
              fontWeight: 'bold',
              padding: isMobile ? '8px 15px' : '10px 20px',
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: isMobile ? '5px' : '10px' }} />
            Reports Utility
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns={isMobile ? '1fr' : 'repeat(12, 1fr)'}
        gridAutoRows={isMobile ? 'auto' : '140px'}
        gap={isMobile ? '10px' : '20px'}
      >
        {/* ROW 1 */}
        <Box
          gridColumn={isMobile ? 'span 12' : 'span 3'}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
          />
        </Box>
        <Box
          gridColumn={isMobile ? 'span 12' : 'span 3'}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={<PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
          />
        </Box>
        <Box
          gridColumn={isMobile ? 'span 12' : 'span 3'}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
          />
        </Box>
        <Box
          gridColumn={isMobile ? 'span 12' : 'span 3'}
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={<TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: '26px' }} />}
          />
        </Box>

       
        <Box
          gridColumn={isMobile ? 'span 12' : 'span 4'}
          gridRow={isMobile ? 'span 1' : 'span 2'}
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant={isMobile ? 'h6' : 'h5'} fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant={isMobile ? 'h6' : 'h5'}
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        
      </Box>
    </Box>
  );
};

export default Dashboard;
