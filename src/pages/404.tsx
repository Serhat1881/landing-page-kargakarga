import VLinkButton from '@/components/buttons/VLinkButton';
import MainLayout from '@/components/layouts/MainLayout';
import { Stack, Typography } from '@mui/material';
import React from 'react';


const Error404: React.FC = () => {
    return (
        <MainLayout  containerWidth="xl">
            <Stack
                spacing={1.5}
                paddingBottom={3}
                height="100%"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
            >
                <Typography variant='h1'>404</Typography>

                <Stack spacing={5}>
                    <Stack spacing={0.5}>
                        <Typography
                            variant="h3"
                            component="h1"
                            fontWeight={800}
                        >
                            Sayfa Bulunamadı
                        </Typography>

                        <Typography variant="body2">
                            Üzgünüz, aradığınız sayfa mevcut değil.
                        </Typography>
                    </Stack>

                    <VLinkButton
                        href="/"
                        variant="outlined"
                        color="secondary"
                        sx={{ color: 'black.main', fontSize: '1rem' }}
                        endIconName="rightArrow"
                    >
                        Anasayfaya Dön
                    </VLinkButton>
                </Stack>
            </Stack>
        </MainLayout>
    );
};

export default Error404;
