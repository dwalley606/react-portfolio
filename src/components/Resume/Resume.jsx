import React from 'react';
import { Container, Typography, Box, Button, List, ListItem } from '@mui/material';

function Resume() {
  const sections = [
    {
      title: "Web Development",
      items: [
        "Front-End: HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Material UI (MUI)",
        "Back-End: Node.js, Express.js, RESTful APIs, GraphQL, MongoDB, PostgreSQL",
        "Content Management Systems (CMS): AFPIMS, WordPress"
      ]
    },
    {
      title: "Programming & Tools",
      items: [
        "Version Control: Git, GitHub",
        "Testing & Debugging: Test-Driven Development (TDD), Jest, Unit Testing",
        "Frameworks & Libraries: React.js, Redux, Axios",
        "Database Management: MongoDB, MySQL, PostgreSQL"
      ]
    },
    {
      title: "Web Design",
      items: [
        "UX/UI Principles",
        "Responsive Design & Mobile-First Development",
        "Web Accessibility Standards (Section 508 Compliance, WCAG)",
        "SEO Optimization"
      ]
    },
    {
      title: "Project Management",
      items: [
        "Agile Methodologies (Scrum)",
        "Collaboration Tools: Trello, Slack",
        "Team Leadership & Mentorship"
      ]
    },
    {
      title: "Soft Skills",
      items: [
        "Problem-Solving & Analytical Thinking",
        "Communication & Team Collaboration",
        "Adaptability & Continuous Learning",
        "Attention to Detail"
      ]
    },
    {
      title: "Cloud & Hosting",
      items: [
        "AWS (S3) for Cloud Solutions",
        "Website Performance Optimization"
      ]
    }
  ];

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Skills & Proficiencies
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://docs.google.com/document/d/1aVTk6CBUfy0o--AYVth0uzqauYulCLMt/edit?usp=sharing&ouid=101214151770995815319&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: 4, mb: 4 }}
      >
        Download Resume
      </Button>
      {sections.map((section, index) => (
        <Box key={index} sx={{ my: 2, width: '100%', maxWidth: 800 }}>
          <Typography variant="h5" gutterBottom>
            {section.title}
          </Typography>
          <List sx={{ textAlign: 'left', mx: 'auto' }}>
            {section.items.map((item, idx) => (
              <ListItem key={idx}>{item}</ListItem>
            ))}
          </List>
        </Box>
      ))}
      
    </Container>
  );
}

export default Resume;
