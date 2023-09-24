import { Grid, Stack } from '@mui/material';
import React from 'react';

import { navConfig } from './navConfig';
import VLinkButton from '@/components/buttons/VLinkButton';

const Navbar = () => {
    return (
        <>
            <Grid item xs={12} md={9}>
                <Stack
                    component="nav"
                    direction="row"
                    spacing={2}
                >
                    {navConfig.map(({ title, href, backgroundColor }, index) => (
                        <VLinkButton
                            key={index}
                            href={href}
                            sx={{
                                color: 'white.main',
                                backgroundColor: backgroundColor || 'primary.dark',
                                borderRadius: '1rem',
                                padding: '1rem',
                                fontSize: '0.875rem',
                                lineHeight: 'normal',
                                letterSpacing: '0.07rem',
                                fontWeight: '600',
                                '&:hover': {
                                    backgroundColor: backgroundColor || 'primary.dark',
                                }
                            }}
                        >
                            {title}
                        </VLinkButton>
                    ))}
                </Stack>
            </Grid>
        </>
    );
};

export default Navbar;
