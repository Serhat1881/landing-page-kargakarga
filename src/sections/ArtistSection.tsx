import WorkerCard from '@/components/card/WorkerCard';
import CustomTypography from '@/components/halper/CustomTypo';
import { Grid, Typography } from '@mui/material';
import React from 'react';
import { workers } from './Workerdata'; 
import Ellipse from '@/components/miscellaneous/Ellipse';

const ArtistSection = () => {

  return (
    <>
      <Grid
        container
        spacing={2}
        alignItems="center"
        mt={{ xs: '1rem', sm: '2rem', md: '3.25rem', xl: '6.25rem' }}
        position="relative"
        p="0 3rem 0 3rem"
      >
        <Ellipse top={-30} left={-100} width={350} height={350} />
        <Grid item xs={12} md={7}>
          <CustomTypography>MANCO ART — Ukrainian Game Art Outsourcing Studio</CustomTypography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography
            component="p"
            sx={{
              color: 'tertiary.main',
              fontSize: {
                xs: '1rem',
                md: '1.5rem',
              },
              fontWeight: {
                xs: 400,
                md: 500,
              },
              lineHeight: '140%',
            }}
          >
            &ldquo;What does it mean? It&rsquo;s simple: we take over the implementation of your project in part or in full - from concepts to the finished art product. Our company employs a staff of qualified specialists in the field of digital drawing.&rdquo;
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} mt={{ xs:'1.5rem', sm:'3rem', md:'5rem',xl:'9.625rem' }} p="0 3rem 0 3rem"> 
        {workers.map((worker, index) => (
          <Grid item xs={12} md={6} xl={3} key={index}>
            <WorkerCard
              name={worker.name}
              job={worker.job}
              imgSrc={worker.imgSrc}
              imgAlt={worker.imgAlt}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ArtistSection;
