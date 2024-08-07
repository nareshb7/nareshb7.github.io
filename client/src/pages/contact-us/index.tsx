import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import SectionHeader from 'common/SectionHeader';
import { Pages } from 'pages/navbar/types';
import { FormData } from './types';
import { sendData } from './api';

const INITIAL_FORM_DATA = {
  name: '',
  email: '',
  subject: '',
  message: '',
};
const INITIAL_MESSAGE = {
  type: '',
  content: '',
};

function ContactUs() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(INITIAL_MESSAGE);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setMessage(INITIAL_MESSAGE);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSend = () => {
    setIsLoading(true);
    sendData(formData)
      .then((dt) => {
        setFormData(INITIAL_FORM_DATA);
        setMessage({ type: 'SUCCESS', content: 'Mail sent Successfully, You will receive a confirmation mail from My team..!' });
      })
      .catch((_) => {
        setMessage({
          type: 'ERROR',
          content: 'Error Occured, while sending  mail please try again...',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </Grid>
       
      </Grid>

      <Box sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="body1">
          Alternatively, you can email us directly at:{' '}
          <a href="mailto:nareshbjava7@gmail.com">nareshbjava7@gmail.com</a>
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactUs;
