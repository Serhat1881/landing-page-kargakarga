/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Previous: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM11.79 13C12.08 13.29 12.08 13.77 11.79 14.06C11.64 14.21 11.45 14.28 11.26 14.28C11.07 14.28 10.88 14.21 10.73 14.06L7.2 10.53C6.91 10.24 6.91 9.76 7.2 9.47L10.73 5.94C11.02 5.65 11.5 5.65 11.79 5.94C12.08 6.23 12.08 6.71 11.79 7L8.79 10L11.79 13Z" />
        </SvgIcon>
    );
};
