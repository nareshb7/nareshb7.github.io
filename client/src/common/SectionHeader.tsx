import { Typography } from '@mui/material'
import React from 'react'

export interface SectionHeaderProps {
    name: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({name}) => {
  return (
    <Typography gutterBottom variant="h2" component="div" marginInline={"10px"}>{name}: </Typography>
  )
}

export default SectionHeader