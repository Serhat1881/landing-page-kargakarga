/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const ChevronDown: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 12 8"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M11.4211 0.712158H0.578825C0.0657524 0.712158 -0.195624 1.33172 0.172239 1.69958L5.59339 7.12073C5.81604 7.34338 6.1839 7.34338 6.40666 7.12073L11.8278 1.69958C12.1956 1.33172 11.9342 0.712158 11.4211 0.712158Z" />
        </SvgIcon>
    );
};
