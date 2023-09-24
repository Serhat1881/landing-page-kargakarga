import React from 'react';
import { Box, Typography } from '@mui/material';
import VDisplayImage from '@/components/displays/VDisplayImage';

type ServiceCardProps = {
  title: string;
  body: string;
  imageUrl: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, body, imageUrl }) => (
  <Box
    bgcolor="secondary.dark"
    borderRadius={4}
    p="2.5rem 1.25rem 2rem 1.25rem"
  >
    <Typography
      component="h1"
      sx={{
        fontSize: {xs: '2rem', md: '1.5rem', xl: '2rem'},
        color: 'tertiary.main',
        fontWeight: 500,
        mb: '35px',
      }}
    >
      {title}
    </Typography>
    <Box>
      <VDisplayImage
        src={imageUrl}
        alt="Service Logo"
        width={400}
        height={1}
        layout="responsive"
      />
    </Box>
    <Typography
      component="p"
      sx={{
        fontSize: '1rem',
        color: 'tertiary.main',
        fontWeight: 400,
        mt: '36px',
      }}
    >
      {body}
    </Typography>
  </Box>
);

export default ServiceCard;
