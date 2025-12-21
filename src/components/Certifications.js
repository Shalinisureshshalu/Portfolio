import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import ccna from '../assets/certificates/ccna.png';
import aws from '../assets/certificates/aws.png';


const certifications = [
  {
    title: 'Cisco CCNA',
    description: 'Networking fundamentals, routing, switching, and security concepts.',
    image: ccna,
  },
  {
    title: 'AWS Cloud Practitioner',
    description: 'Cloud fundamentals, AWS services, security, and best practices.',
    image: aws,
  },
];

function Certifications() {
  return (
    <Box 
      sx={{
        minHeight: '80vh',
        px: { xs: 3, md: 10 },
        py: 8,
        background: '#1c2541',
      }}
    >
      <Typography variant="h3" align="center" gutterBottom>
        My <span style={{ color: '#00e5ff' }}>Certifications</span>
      </Typography>

      <Grid container spacing={4} mt={4} justifyContent="center">
        {certifications.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                sx={{
                  background: '#0b132b',
                  color: '#fff',
                  borderRadius: 3,
                  boxShadow: '0 0 20px rgba(0,229,255,0.15)',
                  '&:hover': {
                    boxShadow: '0 0 30px rgba(0,229,255,0.4)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={cert.image}
                  alt={cert.title}
                  sx={{
                    height: 180,
                    objectFit: 'contain',
                    p: 2,
                    backgroundColor: '#fff',
                  }}
                />

                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="gray">
                    {cert.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Certifications;
