import React from 'react';
import { Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { Instagram, Twitter, Linkedin } from '@/components/icons';

// Iconları bir dizi içinde saklayın
const socialIcons = [
  { url: 'https://www.instagram.com', icon: <Instagram color="white" /> },
  { url: 'https://www.linkedin.com', icon: <Linkedin color="white" /> },
  { url: 'https://www.twitter.com', icon: <Twitter color="white" /> },
];

const Footer: React.FC = () => {
  return (
    <Stack component="footer" bgcolor="footer.main" alignItems="center" justifyContent="center">
      <Stack mt="4.6875rem" flexDirection="row" mb="28px">
        {socialIcons.map((item, index) => (
          <Link href={item.url} target="_blank" key={index}>
            <span style={{ marginRight: '1rem' }}>{item.icon}</span>
          </Link>
        ))}
      </Stack>
      <Typography
        variant="body2"
        color="white"
        align="center"
        mt="0.625rem"
        mb="3rem"
        sx={{
          color: 'white.main',
          fontFamily: 'Poppins',
          fontSize: '1.125rem',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '1.5rem',
        }}
      >
        Üretken insanların tanışıp, proje üretebildiği açık inovasyon merkezi.
      </Typography>
    </Stack>
  );
};

export default Footer;
