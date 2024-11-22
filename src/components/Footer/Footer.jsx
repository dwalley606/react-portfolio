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
                              padding: 2, 
                              backgroundColor: 'background.paper', 
                              position: "fixed", 
                              bottom: 0,
                              width: "100%"
                            }}>
      {icons.map((icon) => (
        <Link
          href={icon.link}
          key={icon.name}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: 1, textDecoration: 'none', color: 'inherit' }}
        >
          <Box
            component="img"
            src={icon.img}
            alt={icon.name}
            sx={{
              width: { xs: 30, sm: 38, md: 46 },
              height: { xs: 30, sm: 38, md: 46 },
              marginBottom: 0.5,
            }}
          />
          <Typography variant="body2">{icon.name}</Typography>
        </Link>
      ))}
    </Box>
  );
}

export default Footer;
