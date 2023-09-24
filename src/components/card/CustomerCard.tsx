import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import VDisplayImage from '../displays/VDisplayImage';

interface CustomerCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  date: string;
  review: string;
}

const CustomerCard: React.FC<CustomerCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  date,
  review,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.dark',
        borderRadius: '1rem',
        padding: '3rem',
      }}
    >
      <Stack flexDirection="row">
        <VDisplayImage
          src={imageSrc}
          alt={imageAlt}
          width={72}
          height={72}
          sx={{ marginRight: '1.5rem' }}
        />
        <Stack gap={0.8}>
          <Typography
            component="h5"
            sx={{
              fontSize: { xs: '1.5rem', md: '1.875rem' },
              fontWeight: '700',
              color: 'tertiary.main',
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            sx={{
              color: 'tertiary.main',
              fontSize: { xs: '0.8rem', md: '1.125rem' },
              fontWeight: '400',
            }}
          >
            {date}
          </Typography>
        </Stack>
      </Stack>
      <Typography
        component="p"
        sx={{
          color: 'tertiary.main',
          fontSize: { xs: '1rem', md: '1.5rem' },
          fontWeight: '400',
          marginTop: '1.125rem',
          lineHeight: '140%',
        }}
      >
        {review}
      </Typography>
    </Box>
  );
}

export default CustomerCard;
