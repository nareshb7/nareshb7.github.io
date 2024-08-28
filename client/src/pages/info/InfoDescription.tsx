import { Telegram } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { PERSONAL_DETAILS } from 'common';
import { useMultipleTypingEffect } from 'common/hooks/useTypingEffect';
import React from 'react';

const InfoDescription: React.FC = () => {
  const [name, role, description] = useMultipleTypingEffect(
    [
      PERSONAL_DETAILS.name,
      PERSONAL_DETAILS.role,
      PERSONAL_DETAILS.description,
    ],
    50,
  );
  return (
    <Box sx={{ textAlign: 'center', fontFamily: 'cursive' }}>
      <Typography variant="h2" sx={{ margin: '5px' }}>
        {name}
      </Typography>
      <Typography variant="h3" sx={{ margin: '5px' }}>
        {role}
      </Typography>
      <Typography variant="h4" sx={{ margin: '5px', lineClamp: '3px' }}>
        {description}
      </Typography>
      <Button sx={{ fontSize: '25px', marginTop: '20px' }}>
        Say Hello
        <Telegram sx={{ fontSize: '25px' }} />
      </Button>
    </Box>
  );
};

export default InfoDescription;
