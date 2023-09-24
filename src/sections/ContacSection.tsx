import React from 'react';
import CustomTypography from '@/components/halper/CustomTypo';
import { Star } from '../components/icons';
import { Box, Grid, Typography } from '@mui/material';
import ContactForm from '@/components/form/ContactForm';
import İmageCard from '@/components/card/İmageCard';

const ContactSection = () => {
  return (
    <Box bgcolor="quaternary.dark" pl="3.5rem">
      <Grid container>
        <Grid item xs={12} md={12} xl={4}>
          <CustomTypography
            icon={<Star />}
            color="white.main"
            marginTop={{ xs: '2rem', sm: '3rem', md: '8.5rem' }}
          >
            Lets start your project!
          </CustomTypography>
          <Typography
            component="p"
            sx={{
              color: 'white.main',
              fontSize: { xs: '1rem', sm: '1.8rem', md: '2rem' },
              fontWeight: 500,
              letterSpacing: '0.64px',
              marginTop: '2rem',
              marginBottom: '3rem',
            }}
          >
            Leave your contact details and we will contact you
          </Typography>
          <ContactForm
            onSubmit={(email, message, isChecked) => {
              console.log('Email:', email);
              console.log('Message:', message);
              console.log('Is Checked:', isChecked);
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} xl={8} position="relative" sx={{ 
            display: { xs: 'none' ,md:'hidden'},
            width: '100%',
            height: '100%',
             }}>
          <Box sx={{
            width: '100%',
            height: '100%',
            transform: 'translateX(170px) translateY(150px)',
          }}>
            <İmageCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
