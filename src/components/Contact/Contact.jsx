import React from 'react';
import { Container, Typography, Link } from '@mui/material';

function Contact() {
  return (
    <Container sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me Directly
      </Typography>
      <Typography variant="body1" paragraph>
        If you would like to contact me directly please use the email or phone number below.
      </Typography>
      <Typography variant="body1">
        Email: <Link href="mailto:dwalley606@gmail.com">dwalley606@gmail.com</Link>
      </Typography>
      <Typography variant="body1">
        Phone: <Link href="tel:850-428-0777">850-428-0777</Link>
      </Typography>
    </Container>
  );
}

export default Contact;
