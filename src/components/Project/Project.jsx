import React from 'react';
import { Card, CardMedia, CardContent, Typography, Link } from '@mui/material';

function Project({ project: { name, repo, link, description, img } }) {
  return (
    <Card key={name} sx={{ width: "90%", maxWidth: 800, margin: 'auto' }}>
      <CardMedia
        component="img"
        image={img}
        alt={name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          <Link href={link} target="_blank" rel="noopener noreferrer" underline="none">
            {name}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          <Link href={repo} target="_blank" rel="noopener noreferrer" underline="none">
            Github Repository
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Project;
