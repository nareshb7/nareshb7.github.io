import React, { useEffect, useState } from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  Link,
  CardActions,
  Box,
} from '@mui/material';
import { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  url,
  techStack,
}) => {
  const [imgSrc, setImgSrc] = useState('');
  const theme = useTheme();
  useEffect(() => {
    image().then((img) => setImgSrc(img.default));
  }, []);
  return (
    <Card
      sx={{
        width: 345,
        height: 350,
        margin: '20px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        transition: 'all 0.3s',
        display: 'inline-block',
        '@media (max-width:767px)': {
          width: 300,
          margin: '5px',
        },
      }}
    >
      <CardMedia component="img" height="140" image={imgSrc} alt={title} />
      <CardContent sx={{ textAlign: 'start' }}>
        <Typography gutterBottom variant="h4" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
        <Box>
          <Typography variant="h5">Tech Stack:</Typography>
          <Typography variant="body2">
            {techStack.map((tech, i) => (
              <span key={tech}>
                {tech}
                {i === techStack.length - 1 ? '' : ', '}
              </span>
            ))}
          </Typography>
        </Box>
      </CardContent>

      <CardActions style={{ alignSelf: 'end' }}>
        <Typography>
          Click here for{' '}
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </Link>
        </Typography>
        {/* <Button size="small" color="primary" href={url} target="_blank">
          <Typography variant="inherit">{title} </Typography>
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
