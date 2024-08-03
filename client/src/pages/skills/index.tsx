import { Box, CircularProgress, Typography } from '@mui/material';
import SectionHeader from 'common/SectionHeader';
import React from 'react';
import CircularProgressWithLabel from './CircularProgressWithLabel';


const skillSet = [
  { id: 1, name: 'Html', progress: 80 },
  { id: 2, name: 'CSS', progress: 80 },
  { id: 3, name: 'Java Script', progress: 80 },
  { id: 4, name: 'Tailwind CSS', progress: 45 },
  { id: 5, name: 'Sass', progress: 55 },
  { id: 6, name: 'React', progress: 80 },
  { id: 7, name: 'BootStrap', progress: 70 },
  { id: 8, name: 'Node JS', progress: 50 },
  { id: 9, name: 'Express JS', progress: 50 },
  { id: 10, name: 'AWS', progress: 20 },
  { id: 11, name: 'Mongo DB', progress: 40 },
];

const Skills: React.FC = () => {
  return (
    <Box id="skills">
      <SectionHeader name="Skills" />
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {skillSet.map((skill) => {
          return <CircularProgressWithLabel key={skill.id} value={skill.progress} name={skill.name} />;
        })}
      </Box>
    </Box>
  );
};

export default Skills;
