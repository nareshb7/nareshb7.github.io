import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SectionHeader from 'common/SectionHeader';
import { Pages } from 'pages/navbar/types';
import { Link } from '@mui/material';
import { useContactus } from './hook';

const ContactUs = () => {
  const { formData, message, isLoading, handleChange, handleSend } =
    useContactus();

  return (
    <Box sx={{ padding: 4, maxWidth: 800, margin: 'auto' }} id={Pages.CONTACT}>
      <SectionHeader name={'Contact Us'} />
      <Typography
        variant="h4"
        component="h1"
        sx={{ marginBottom: 2, textAlign: 'center' }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{ marginBottom: 4, textAlign: 'center' }}
      >
        Feel free to reach out to us with any questions or comments. We'll get
        back to you as soon as possible!
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            value={formData.name}
            required
            sx={{ marginBottom: 2 }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            value={formData.email}
            required
            sx={{ marginBottom: 2 }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Subject"
            name="subject"
            value={formData.subject}
            variant="outlined"
            required
            sx={{ marginBottom: 2 }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            name="message"
            value={formData.message}
            multiline
            rows={4}
            required
            sx={{ marginBottom: 2 }}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          {message.type === 'ERROR' && (
            <Typography
              sx={{
                color: 'red', // Error color
                backgroundColor: '#fdd', // Light red background
                padding: 1,
                borderRadius: 1,
              }}
            >
              {message.content}
            </Typography>
          )}
          {message.type === 'SUCCESS' && (
            <Typography
              sx={{
                color: 'green', // Success color
                backgroundColor: '#dfd', // Light green background
                padding: 1,
                borderRadius: 1,
              }}
            >
              {message.content}
            </Typography>
          )}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSend}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="body1">
          Alternatively, you can email us directly at:{' '}
          <Link href="mailto:nareshbjava7@gmail.com">
            nareshbjava7@gmail.com
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactUs;
