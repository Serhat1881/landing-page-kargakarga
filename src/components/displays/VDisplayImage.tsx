import type { SxProps } from '@mui/material';
import { Box } from '@mui/material';
import type { ImageProps } from 'next/image';
import NextImage from 'next/image';
import React from 'react';

type VDisplayImageProps = {
    sx?: SxProps;
    imgStyle?: any;
} & ImageProps;

const VDisplayImage: React.FC<VDisplayImageProps> = ({
    className,
    sx,
    imgStyle,
    ...props
}) => {
    return (
        <Box
            position="relative"
            height={props.height}
            className={className}
            sx={{ ...sx }}
        >
            <NextImage
                objectFit='cover'
                {...props}
                sizes="100vw"
                style={{ objectFit: 'cover', ...imgStyle }}
            />
        </Box>
    );
};

export default VDisplayImage;
