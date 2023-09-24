import React from 'react';
import { Box, Grid } from '@mui/material';
import ServiceCard from '@/components/card/ServiceCard';
import { Servicesdata } from './Servicesdata'; 
import CustomTypo from '@/components/halper/CustomTypo';
import Ellipse from '@/components/miscellaneous/Ellipse';

const ServicesSection = () => {
  return (
    <Box position="relative"  mt="3.438rem" p="0 3rem 0 3rem">
      <Ellipse top={30} right={0} width={350} height={350} />
      <CustomTypo>
        Our Services
      </CustomTypo>
      <Grid container spacing={4} mt="3.125rem">
        {Servicesdata.map((section, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} >
            <ServiceCard
              title={section.title}
              body={section.body}
              imageUrl={section.imageUrl} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicesSection;
