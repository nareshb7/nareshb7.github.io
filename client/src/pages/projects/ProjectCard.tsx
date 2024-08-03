import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  Button,
  Link,
  CardActions,
} from '@mui/material';
import { ProjectCardProps } from './types';

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  url,
}) => {
  const theme = useTheme();
  return (
    <Card
      style={{
        width: 345,
        height: 300,
        margin: '20px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        transition: 'all 0.3s',
        display: "inline-block"
      }}
    >
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{ alignSelf: 'end' }}>
        <Button size="small" color="primary" href={url} target="_blank">
          <Typography variant="inherit"> Click here</Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
