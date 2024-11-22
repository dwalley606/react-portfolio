import { useState } from "react";
import Project from "../Project/Project";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import projectsData from "../../data/projectsData";

function Portfolio() {
  const [projects] = useState(projectsData);

  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom sx={{ pt: 2 }}>
        My Projects
      </Typography>
      <Box sx={{ pt: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: "column", gap: 2 }}>
          {projects.map((project, idx) => (
            <Box item xs={12} sm={6} md={4} key={"project" + idx} sx={{ mb: 4 }}>
              <Project project={project} />
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Portfolio;
