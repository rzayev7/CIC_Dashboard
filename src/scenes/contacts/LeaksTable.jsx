import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

// Generate random timestamp
const getRandomTimestamp = () => {
  const date = new Date(Date.now() - Math.floor(Math.random() * 86400000)); // Random date within the last 24 hours
  return date.toLocaleString();
};

// Generate random hostname
const getRandomHost = () => {
  const prefixes = ['sm', 'lg', 'md'];
  const suffixes = ['laptop', 'desktop', 'server'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${prefix}-${suffix}`;
};

// Generate random username
const getRandomUserName = () => {
  const prefixes = ['USER', 'ADMIN'];
  const suffixes = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${prefix}-${suffix}`;
};

// Generate random severity
const getRandomSeverity = () => {
  const severities = ['Low', 'Medium', 'High'];
  return severities[Math.floor(Math.random() * severities.length)];
};

// Generate random alert source
const getRandomAlertSource = () => {
  const sources = ['XDR Analytics', 'Firewall', 'IDS', 'IPS'];
  return sources[Math.floor(Math.random() * sources.length)];
};

// Generate random action
const getRandomAction = () => {
  const actions = ['Detected', 'Blocked', 'Ignored'];
  return actions[Math.floor(Math.random() * actions.length)];
};

const generateRandomAlert = () => {
  return {
    timestamp: getRandomTimestamp(),
    host: getRandomHost(),
    userName: getRandomUserName(),
    severity: getRandomSeverity(),
    alertSource: getRandomAlertSource(),
    action: getRandomAction(),
  };
};

const LeaksTable = () => {
  // Generate 10 random alerts
  const alerts = Array.from({ length: 10 }, generateRandomAlert);

  return (
    <TableContainer component={Paper} sx={{ background: '#0D47A1', color: 'white' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell>HOST</TableCell>
            <TableCell>USER NAME</TableCell>
            <TableCell>SEVERITY</TableCell>
            <TableCell>ALERT SOURCE</TableCell>
            <TableCell>ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alerts.map((alert, index) => (
            <TableRow key={index}>
              <TableCell>{alert.timestamp}</TableCell>
              <TableCell>{alert.host}</TableCell>
              <TableCell>{alert.userName}</TableCell>
              <TableCell>{alert.severity}</TableCell>
              <TableCell>{alert.alertSource}</TableCell>
              <TableCell>{alert.action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LeaksTable;
