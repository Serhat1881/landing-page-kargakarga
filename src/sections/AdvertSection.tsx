import VButton from '@/components/buttons/VButton';
import VDisplayImage from '@/components/displays/VDisplayImage';
import CustomTypography from '@/components/halper/CustomTypo';
import { Box, Grid, Stack, Typography, useMediaQuery, Theme } from '@mui/material';
import React from 'react';

const AdvertSection = () => {
  const isLargeScreen = useMediaQuery('(min-width: 56.25rem)');

  return (
    <Box p="0 1.875rem 0 1.875rem" mb={{xs: '2rem',md:'5rem',xl:'13rem'}}>
      <Grid
        container
        sx={{
          backgroundColor: 'tertiary.main',
          borderRadius: '1rem',
          paddingLeft: '1.875rem',
          flexDirection: 'row',
          position: 'relative',
          height: { xs: 'auto', md: '56.25rem', xl: '34rem' },
        }}
      >
        <Grid item md={12} xl={6} paddingTop="3.75rem" > 
          <CustomTypography color="white.main">
            Hey! You can send us a message to start working on the project
          </CustomTypography>
          <Stack flexDirection={{ xs:'column',sm:'row'}} mt={{ md: '1.875rem', xl: '3.75rem' }} mb="2.5rem"> 
            <VButton
              sx={{
                backgroundColor: 'quaternary.dark',
                color: 'white.main',
                borderRadius: '1rem',
                padding: '1rem 3.75rem', 
                fontSize: '1.125rem',
                fontWeight: 800,
                marginRight: { xs: '1.875rem', sm: '3.75rem' },
                '&:hover': {
                  backgroundColor: 'quaternary.dark',
                },
              }}
            >
              Start the Project
            </VButton>
            <Stack justifyContent="center">
              <Typography
                sx={{
                  color: 'white.main',
                  fontSize: '1.5rem', 
                  fontWeight: 400,
                }}
              >
                Or write to us at:<br />
                info@kargakarga.com
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        {isLargeScreen && (
          <Grid item md={12} xl={6} overflow="hidden" xs>
            <VDisplayImage
              src="/images/phone.png"
              alt="advert"
              width={848} 
              height={520}
              sx={{
                marginTop: '1.25rem', 
                position: 'absolute',
                right: '0',
                bottom: '0',
              }}
            />
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default AdvertSection;
