import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import githubIcon from "../../assets/icons/github.png";
import linkedinIcon from "../../assets/icons/linkedin.png";
import facebookIcon from "../../assets/icons/facebook.png";

function Footer() {
  const icons = [
    {
      name: "GitHub",
      link: "https://github.com/dwalley606",
      img: githubIcon,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/daniel-walley/",
      img: linkedinIcon,
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/dwalle1/",
      img: facebookIcon,
    },
  ];

  return (
    <Box component="footer" sx={{ 
                              display: 'flex', 
                              justifyContent: 'space-around', 
                              alignItems: 'center', 
                              padding: 1, 
                              backgroundColor: 'background.paper', 
                              position: "fixed", 
                              bottom: 0,
                              width: "100%",
                              height: '10vh',
                            }}>
      {icons.map((icon) => (
        <Link
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2, textDecoration: 'none', color: 'inherit' }}
        >
          <Box
            component="img"
            src={icon.img}
            alt={icon.name}
            sx={{
              width: { xs: 20},
              height: { xs: 20},
              marginBottom: 0.5,
            }}
          />
          <Typography variant="caption" sx={{ fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.8rem' } }}>
            {icon.name}
          </Typography>
        </Link>
      ))}
    </Box>
  );
}

export default Footer;
