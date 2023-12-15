import React from 'react';
import {
  Box,
  Button,
  IconButton,
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
import LineChart from '../../components/LineChart';
import GeographyChart from '../../components/GeographyChart';
import BarChart from '../../components/BarChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgressCircle';

const Dashboard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const colors = tokens(theme.palette.mode);

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

        <Box mt={isMobile ? '10px' : '0'}>
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

        {/* ROW 2 */}
        <Box
          gridColumn={isMobile ? 'span 12' : 'span 8'}
          gridRow={isMobile ? 'span 1' : 'span 2'}
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt={isMobile ? '10px' : '25px'}
            p={isMobile ? '0 10px' : '0 30px'}
            display="flex"
            justifyContent={isMobile ? 'space-around' : 'space-between'}
            alignItems="center"
          >
            <Box>
              <Typography
                variant={isMobile ? 'h6' : 'h5'}
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant={isMobile ? 'h4' : 'h3'}
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $23,452.56
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: isMobile ? '20px' : '26px', color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height={isMobile ? '200px' : '250px'} m={isMobile ? '0' : '-20px 0 0 0'}>
            <LineChart isDashboard={true} />
          </Box>
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

        {/* ROW 3 */}
        <Box
          gridColumn={isMobile ? 'span 12' : 'span 4'}
          gridRow={isMobile ? 'span 1' : 'span 2'}
          backgroundColor={colors.primary[400]}
          p={isMobile ? '20px 10px' : '30px'}
        >
          <Typography variant={isMobile ? 'h6' : 'h5'} fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems={isMobile ? 'center' : 'flex-start'}
            mt={isMobile ? '15px' : '25px'}
          >
            <ProgressCircle size={isMobile ? '100' : '125'} />
            <Typography
              variant={isMobile ? 'h6' : 'h5'}
              color={colors.greenAccent[500]}
              sx={{ mt: isMobile ? '10px' : '15px' }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={isMobile ? 'span 12' : 'span 4'}
          gridRow={isMobile ? 'span 1' : 'span 2'}
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            fontWeight="600"
            sx={{ padding: isMobile ? '20px 10px 0 10px' : '30px 30px 0 30px' }}
          >
            Sales Quantity
          </Typography>
          <Box height={isMobile ? '150px' : '250px'} mt={isMobile ? '-20px' : '0'}>
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={isMobile ? 'span 12' : 'span 4'}
          gridRow={isMobile ? 'span 1' : 'span 2'}
          backgroundColor={colors.primary[400]}
          padding={isMobile ? '20px 10px' : '30px'}
        >
          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            fontWeight="600"
            sx={{ marginBottom: isMobile ? '10px' : '15px' }}
          >
            Geography Based Traffic
          </Typography>
          <Box height={isMobile ? '100px' : '200px'}>
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
