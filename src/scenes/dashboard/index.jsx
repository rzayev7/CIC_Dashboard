import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import BugReportIcon from "@mui/icons-material/BugReport";
import PolicyIcon from '@mui/icons-material/Policy';
import SummarizeIcon from '@mui/icons-material/Summarize';
import React from 'react';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* Custom Card */}
      <Box display="flex"
            gap="20px"
      
      >
        <Box
          gridColumn="span 3"
          gridRow="span 1"
          width="310px"
          height="110px"
          marginBottom="15px"
          bgcolor={colors.primary[400]}
          padding="15px"
          borderRadius="5px"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
          display="flex"
          justifyContent="space-between" // Adjusted
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" color={colors.grey[100]}>
              MALWARE
            </Typography>
            <Box display="flex" gap="10px" alignItems="center">
              <Typography
                variant="h1"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                3.21K
              </Typography>
              <Typography
                variant="h4"
                color={colors.green && colors.green[500]}
                sx={{ marginLeft: "5px" }}
              >
                +8 (24 hours)
              </Typography>
            </Box>
          </div>
          <BugReportIcon fontSize="large" color="#fffffff" />
        </Box>

        <Box
          gridColumn="span 3"
          gridRow="span 1"
          width="310px"
          height="110px"
          marginBottom="15px"
          bgcolor={colors.primary[400]}
          padding="15px"
          borderRadius="5px"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
          display="flex"
          justifyContent="space-between" // Adjusted
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" color={colors.grey[100]}>
            INDICATORS
            </Typography>
            <Box display="flex" gap="10px" alignItems="center">
              <Typography
                variant="h1"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                333.63K
              </Typography>
            </Box>
          </div>
          <PolicyIcon fontSize="large" color="#fffffff" />
          
        </Box>

        <Box
          gridColumn="span 3"
          gridRow="span 1"
          width="310px"
          height="110px"
          marginBottom="15px"
          bgcolor={colors.primary[400]}
          padding="15px"
          borderRadius="5px"
          boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
          display="flex"
          justifyContent="space-between" // Adjusted
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold" color={colors.grey[100]}>
            REPORTS
            </Typography>
            <Box display="flex" gap="10px" alignItems="center">
              <Typography
                variant="h1"
                fontWeight="bold"
                color={colors.grey[100]}
              >
                8.77K
              </Typography>
              <Typography
                variant="h4"
                color={colors.green && colors.green[500]}
                sx={{ marginLeft: "5px" }}
              >
                +18 (24 hours)
              </Typography>
            </Box>
          </div>
          <SummarizeIcon fontSize="large" color="#fffffff" />
        </Box>
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box height="320px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Most Active Vulnerabilities
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Threat map
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
