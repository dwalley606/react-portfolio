import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import profilePic from "../../assets/cover/profilepic.jpg";

function About() {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={4}
        sx={{
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: { xs: 'center', md: 'center' },
        }}
      >
        <Box
          component="img"
          alt="Profile"
          src={profilePic}
          sx={{
            width: { xs: "60%", sm: "50%", md: "40%" },
            maxHeight: '80vh',
            mb: { xs: 2, md: 0 },
            borderRadius: '8px',
            objectFit: 'contain',
          }}
        />
        <Typography
          variant="body1"
          align="left"
          sx={{
            width: { xs: "80%", md: "50%" },
            pl: { md: 4 },
            maxHeight: '80vh',
          }}
        >
          Welcome to my portfolio! I’m Daniel Walley, a passionate and detail-oriented Web Developer with over four years of experience in creating and maintaining scalable web applications. Leveraging modern tools such as React.js, Node.js, GraphQL, and RESTful APIs, I thrive in developing responsive user interfaces and robust backend systems. My journey into web development is enriched by my background in strategic communications and project management, allowing me to bring a collaborative and solutions-focused approach to every project. Whether it's designing a dynamic landing page, optimizing website performance, or implementing innovative full-stack solutions, I’m dedicated to delivering impactful digital experiences. Explore my projects and skills to see how I turn ideas into functional, user-friendly applications!
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
