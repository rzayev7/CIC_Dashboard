import { Box, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from 'react';

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      
    />
  );
};

export default ProgressCircle;
