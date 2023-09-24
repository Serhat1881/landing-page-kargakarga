import React from 'react';
import { Stack, Typography, Box } from '@mui/material';

const CustomSlider = ({ staticItems, activeSlideId }: { staticItems: object, activeSlideId: number }) => {
  return (
    <Stack flexDirection="row" gap={{xs: 2, md: 2}} mt={{xs: 0, md: 3}}>
      {Array.isArray(staticItems) && staticItems.map((slide:any) => (
        <Stack flexDirection={{xs: 'row', md: 'column'}} width="100%" alignItems={{xs: 'center', md: 'start'}} key={slide.id}>
          <Typography
            variant="subtitle1"
            sx={{
              fontSize: {xs: '0.8rem', md: '1rem'},
              fontWeight: '400',
              lineHeight: {xs: '1rem', md: '1.5rem'},
              letterSpacing: '0.16rem',
              color: activeSlideId === slide.id ? 'primary.dark' : 'secondary.dark',
              transition: 'color 0.3s ease',
              mb: {xs: 0, md: 2},
            }}
          >
            {slide.activeText}
          </Typography>
          <Box
            sx={{
              color: activeSlideId === slide.id ? 'secondary.main' : 'inherit',
              transition: 'color 0.3s ease',
              width: {xs: '3px', md: '100%'},
              height: {xs: '100px', md: '3px'},
              backgroundColor: activeSlideId === slide.id ? 'secondary.main' : 'secondary.dark',
            }}
          ></Box>
        </Stack>
      ))}
    </Stack>
  );
};

export default CustomSlider;
