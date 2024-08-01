import {
  GitHub,
  Instagram,
  LinkedIn,
  Message,
  SendAndArchiveOutlined,
  SendOutlined,
} from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { DEVELOPER_NAME, PERSONAL_DETAILS } from 'common';
import React from 'react';
import FlexBetween from 'styles/FlexBetween';
import StyledImage from 'styles/StyledImage';
import developerImage from 'assets/developer.jpeg';

const Info = () => {
  return (
    <FlexBetween>
      <Box>
        <FlexBetween flexDirection={"column"} gap="1rem" >
          <Instagram sx={{fontSize: "2.3rem"}}/>
          <GitHub sx={{fontSize: "2.3rem"}} />
          <LinkedIn sx={{fontSize: "2.3rem"}} />
        </FlexBetween>
      </Box>
      <Box sx={{textAlign: "center", fontFamily: "cursive"}}>
        <Typography variant="h1" sx={{ margin: "5px"}}>{PERSONAL_DETAILS.name}</Typography>
        <Typography variant="h3" sx={{ margin: "5px"}}>{PERSONAL_DETAILS.role}</Typography>
        <Typography variant="h5" sx={{ margin: "5px"}}>{PERSONAL_DETAILS.description}</Typography>
        <Button sx={{ fontSize: '25px',marginTop: "20px" }}>
          Say Hello &nbsp;
          <SendOutlined />
        </Button>
      </Box>
      <Box>
        <Box sx={{ width: '400px', height: '400px' }}>
          <StyledImage src={developerImage} sx={{borderRadius:"50%"}} />
        </Box>
      </Box>
    </FlexBetween>
  );
};

export default Info;
