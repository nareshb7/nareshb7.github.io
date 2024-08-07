import React from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { SkillSet } from './type';
import { Pages } from 'pages/navbar/types';
import { skillSet } from './config';

const Skills: React.FC = () => {
  return (
    <Box
      id={Pages.SKILLS}
      sx={{
        p: 3,
        bgcolor: 'background.default',
        color: 'text.primary',
        width: '50%',
        marginLeft: "5%",
        '@media (max-width:767px)': {
          width: '100%',
          marginLeft: 0
        },
      }}
    >
      <Typography variant="h4" gutterBottom>
        My Skills
      </Typography>
      
      {Object.keys(skillSet).map((category) => (
        <Box key={category} sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            {category.charAt(0).toUpperCase() + category.slice(1)}:
          </Typography>
          {skillSet[category as keyof SkillSet].map((skill) => (
            <Box key={skill.id} sx={{ mb: 2 }}>
              <Typography variant="h6" gutterBottom>
                {skill.name}
              </Typography>
              <LinearProgress variant="determinate" value={skill.progress} aria-label={skill.name}/>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Skills;
