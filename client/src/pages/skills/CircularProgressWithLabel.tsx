import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import React from 'react';
import { ThemeType, useCustomeTheme } from 'theme/index';

const CircularProgressWithLabel = ({
  value,
  name,
}: {
  value: number;
  name: string;
}) => {
  const theme = useCustomeTheme()
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
        border: '1px solid #888',
      }}
    >
      <CircularProgress
        size={150}
        variant="determinate"
        value={value}
        sx= {{
          circle: {
            stroke: theme.palette.neutral.dark[theme.palette.mode === 'light' ? 200 : 700],
          },
          '& .MuiCircularProgress-circle': {
            stroke: theme.palette.neutral.light[theme.palette.mode === 'light' ? 200 : 700],
          },
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            marginLeft: 2,
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
};
export default CircularProgressWithLabel;
