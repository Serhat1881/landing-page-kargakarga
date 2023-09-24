import { Divider, Drawer, Grid, IconButton, List, Stack } from '@mui/material';
import React, { useState } from 'react';

import VIcon from '@/components/miscellaneous/VIcon';

import { navConfig } from './navConfig';
import NavbarMobileItem from './NavbarMobileItem';

const NavbarMobile = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <Grid item xs={2} display="flex" justifyContent="flex-end">
                <IconButton
                    color="transparent"
                    size="medium"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    title="mobile menu"
                    sx={{
                        '&:hover': {
                            backgroundColor: 'transparent.main',
                        }
                    }}
                >
                    <VIcon
                        iconName={menuOpen ? 'cross' : 'hamburger'}
                        fontSize="inherit"
                        color="quaternary"
                    />
                </IconButton>
            </Grid>

            <Drawer
                open={menuOpen}
                transitionDuration={500}
                elevation={0}
                anchor="right"
                onClose={() => setMenuOpen(false)}
                hideBackdrop
                sx={{
                    position: 'relative',
                    height: 'calc(100% - 88px)',
                    '& > div': { top: 110, height: 'calc(100% - 88px)' },
                    '& > .MuiPaper-root': {
                        width: '100%',
                        border: 'none',
                        borderRadius: 0,
                    },
                }}
            >
                <Stack
                    component="nav"
                    height="100%"
                    paddingBottom={3}
                    justifyContent="space-between"
                >
                    <List sx={{ '.MuiListItem-padding': { paddingY: 2 } }}>
                        {navConfig.map(({ id, title, href }) => (
                            <React.Fragment key={id}>
                                <NavbarMobileItem
                                    title={title}
                                    href={href}
                                />
                                <Divider component="li" />
                            </React.Fragment>
                        ))}
                    </List>

                </Stack>
            </Drawer>
        </>
    );
};

export default NavbarMobile;
