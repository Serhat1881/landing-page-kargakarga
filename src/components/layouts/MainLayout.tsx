import { Box, Container } from '@mui/material';
import React from 'react';

import Footer from '@/components/partials/footer/Footer';
import Header from '@/components/partials/header/Header';

import AppHead from './TheApp/AppHead';

type MainLayoutProps = {
    containerWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    children: React.ReactNode;
    hasSidebar?: boolean;
    header?: string;
};

const MainLayout: React.FC<MainLayoutProps> = ({
    children,
}) => {
    return (
        <Box display="flex" flexDirection="column" height="100%" >

            <AppHead />

            <Header />

            {children}
            
            <Footer />
        </Box>
    );
};

export default MainLayout;
