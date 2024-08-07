import React from 'react';

import { GITHUB_URL, INSTAGRAM_URL, LEETCODE_URL, LINKEDIN_URL } from 'common';
import FlexBetween from 'styles/FlexBetween';
import { Box, IconButton, Link } from '@mui/material';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import LeetCodeIcon from 'assets/svg/Leetcode';

const InfoLinks: React.FC = () => {
  return (
    <Box
      sx={{
        '@media (max-width:767px)': {
          width: '100%',
        },
      }}
    >
      <FlexBetween
        flexDirection={'column'}
        gap="1rem"
        sx={{
          '@media (max-width:767px)': {
            flexDirection: 'row',
            justifyContent: 'center',
          },
        }}
      >
        <Link href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <IconButton color="primary" aria-label="Github">
            <GitHub sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Link>
        <Link href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
          <IconButton color="primary" aria-label="LinkedIn">
            <LinkedIn sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Link>
        <Link href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
          <IconButton color="primary" aria-label="Instagram">
            <Instagram sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Link>
        <Link href={LEETCODE_URL} target="_blank" rel="noopener noreferrer">
          <IconButton color="primary" aria-label="Github">
            <LeetCodeIcon sx={{ fontSize: '2rem' }} />
          </IconButton>
        </Link>
      </FlexBetween>
    </Box>
  );
};

export default InfoLinks;
