import React, { useState, useEffect } from 'react';
import { Box, Container, Stack, Typography } from '@mui/material';
import Cookies from 'js-cookie'; 

import VButton from '@/components/buttons/VButton';

const CookieSection = () => {
  const [isAccepted, setIsAccepted] = useState(false); 
  const [isRejected, setIsRejected] = useState(false); 

  useEffect(() => {
    const cookiesAccepted = Cookies.get('cookiesAccepted');
    if (cookiesAccepted === 'true') {
      setIsAccepted(true); 
    } else if (cookiesAccepted === 'false') {
      setIsRejected(true); 
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('cookiesAccepted', 'true', { expires: 365 }); 
    setIsAccepted(true);
  };

  const rejectCookies = () => {
    Cookies.set('cookiesAccepted', 'false', { expires: 365 }); 
    setIsRejected(true);
  };

  if (isAccepted || isRejected) {
    return null;
  }

  return (
    <Stack  bgcolor="tertiary.main" p="1rem 0 1rem 0" mt="3rem">
      {!isAccepted && !isRejected && ( 
        <Box sx={{
          display: 'flex',
          flexDirection:{ xs: 'column', md: 'row' },
          justifyContent:"space-between",
          padding: '0 3rem 0 3rem',
        }}>
          <Typography width={{ xs: '100%', md: '60%' }} sx={{
            color: 'white.main',
            fontSize: '1rem',
            fontWeight: 400,
          }}>
            privacy setting — This site uses third-party website tracking technologies to provide and continually improve our services. I agree and may revoke or change my consent at any time with effect for the future. See also our <u>Privacy Policy</u> and <u>Cookies</u>
          </Typography>
          <Stack flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
              <VButton sx={{
                backgroundColor: 'primary.main',
                color: 'white.main',
                padding: { xs: '1px 1.5px', md: '24px 32px'},
                borderRadius: 4,
                fontSize: '18px',
                fontWeight: 700,
                mt: { xs: '1rem', md: 0 },

                '&:hover': {
                  backgroundColor: 'primary.main',
                }

              }} onClick={acceptCookies}>Deny</VButton>
              <VButton sx={{
                backgroundColor: 'white.main',
                color: 'primary.dark',
                padding: { xs: '1px 1.5px', md: '24px 32px'},
                borderRadius: 4,
                fontSize: '18px',
                fontWeight: 700,

                '&:hover': {
                  backgroundColor: 'white.main',
                }
              }} onClick={rejectCookies}>Accept</VButton>
          </Stack>
        </Box>
      )}
    </Stack>
  );
}

export default CookieSection;
