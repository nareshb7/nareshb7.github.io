import { Box } from '@mui/material';
import developerImage from 'assets/developer.jpeg';
import React from 'react';
import FlexBetween from 'styles/FlexBetween';
import StyledImage from 'styles/StyledImage';
import InfoDescription from './InfoDescription';
import InfoLinks from './InfoLinks';
import { Pages } from 'pages/navbar/types';

const Info: React.FC = () => {
  return (
    <FlexBetween id={Pages.INFO} height={"100vh"} width={'85%'} margin={'auto'} sx={{
      '@media (max-width:767px)': {
          flexDirection:"column"
        },
    }}  >
      <InfoLinks />
      <InfoDescription />
      <Box sx={{ marginRight: '10px' }}>
        <Box sx={{ width: '300px', height: '300px' }}>
          <StyledImage src={developerImage} sx={{ borderRadius: '50%' }} alt="developer-image" />
        </Box>
      </Box>
    </FlexBetween>
  );
};

export default Info;
