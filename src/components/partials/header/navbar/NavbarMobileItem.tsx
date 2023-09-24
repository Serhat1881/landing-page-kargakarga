import { ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

type NavbarMobileItemProps = {
    title: string;
    href: string;
};

const NavbarMobileItem: React.FC<NavbarMobileItemProps> = ({ title, href }) => {

    return (
        <ListItem sx={{ a: { width: '100%' } }}>
            <Link href={href}>
                <Typography variant="header">
                    {title}
                </Typography>
            </Link>
        </ListItem>
    );
};

export default NavbarMobileItem;
