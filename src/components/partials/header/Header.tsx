import VDisplayImage from '@/components/displays/VDisplayImage';
import { Box, Container, Grid, Link, Theme, useMediaQuery } from '@mui/material';
import React from 'react';
import NavbarMobile from './navbar/NavbarMobile';
import Navbar from './navbar/Navbar';

const Header: React.FC = () => {

    const isMobile = useMediaQuery((theme: Theme) =>
        theme.breakpoints.down('md')
    );

    return (
        <Box component="header" sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding:" 3.438rem 3rem 0 3rem"
        }}>
                
            
                    <Grid item xs={6} md={2}>
                        <Link href="/">
                        <VDisplayImage
                                src="/images/kargakargalogo.svg"
                                alt="Logo"
                                width={276}
                                height={51}
                            />
                        </Link>
                    </Grid>
                    {isMobile ? <NavbarMobile /> : <Navbar />}
        </Box>

    );
};
export default Header;
