import React from 'react'
import ProjectCard from './ProjectCard'
import { projectConfig } from './projectsConfig';
import { Box } from '@mui/material';
import SectionHeader from 'common/SectionHeader';

const Projects: React.FC = () => {
  return (
    <Box id="projects">
      <SectionHeader name="Projects"/>
      <Box width={"90%"} margin={"auto"} textAlign={"center"}>
      {
        projectConfig.map(project => {
          return <ProjectCard key={project.id} {...project}/>
        })
      }
      </Box>
    </Box>
  )
}

export default Projects