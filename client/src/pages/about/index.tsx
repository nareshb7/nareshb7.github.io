import { Box, Link } from '@mui/material';
import SectionHeader from 'common/SectionHeader';
import { Pages } from 'pages/navbar/types';
import React from 'react';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import developerImage from 'assets/developer.jpeg';
import { LINKEDIN_URL } from 'common';

const About: React.FC = () => {
  return (
    <Box id={Pages.ABOUT}>
      <SectionHeader name={"About Me"} />
      <Box
        sx={{ padding: 4, maxWidth: 800, margin: 'auto', textAlign: 'center' }}
      >
        <Avatar
          src={developerImage}
          sx={{ width: 120, height: 120, margin: 'auto' }}
        />
        <Typography variant="h4" component="h1" sx={{ marginTop: 2 }}>
          Naresh Baleboina
        </Typography>
        <Typography variant="h6" component="h2" sx={{ marginTop: 2 }}>
          React Developer | Web Enthusiast
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ marginTop: 2, textAlign: 'justify' }}
        >
          I am a passionate React developer with 2 years of experience building
          dynamic and responsive web applications. Currently, I work with Ant
          Design and Material UI to create intuitive and user-friendly
          interfaces. My journey in web development started with a strong
          foundation in HTML, CSS, and JavaScript, which evolved into mastering
          modern frameworks like React and Node.js.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ marginTop: 2, textAlign: 'justify' }}
        >
          Over the past few years, I've had the opportunity to work on several
          exciting projects, including developing an e-commerce platform and a
          restaurant website. These projects have not only honed my technical
          skills but also taught me the importance of user experience and
          performance optimization.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ marginTop: 2, textAlign: 'justify' }}
        >
          My technical skillset includes:
        </Typography>
        <Box sx={{ textAlign: 'left', marginLeft: 2 }}>
          <Typography variant="body2" component="p">
            • JavaScript, HTML, CSS
          </Typography>
          <Typography variant="body2" component="p">
            • React, Node.js, Express.js
          </Typography>
          <Typography variant="body2" component="p">
            • Ant Design, Material UI, Bootstrap, Tailwind CSS, Sass
          </Typography>
          <Typography variant="body2" component="p">
            • MongoDB
          </Typography>
          <Typography variant="body2" component="p">
            • Git, Docker
          </Typography>
        </Box>
        <Typography
          variant="body1"
          component="p"
          sx={{ marginTop: 2, textAlign: 'justify' }}
        >
          I hold a degree from JNTUH and have completed several
          certifications in web development. In my free time, I enjoy solving
          coding challenges on <Link>LeetCode</Link>, participating in technical conferences,
          and exploring the latest trends in web development.
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ marginTop: 2, textAlign: 'justify' }}
        >
          Feel free to reach out to me on{' '}
          <Link
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          or via email at nareshbjava7@example.com.
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
