/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Mobile: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 16 21"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M12.24 0.5H3.76C1 0.5 0 1.5 0 4.31V16.69C0 19.5 1 20.5 3.76 20.5H12.23C15 20.5 16 19.5 16 16.69V4.31C16 1.5 15 0.5 12.24 0.5ZM8 17.8C7.04 17.8 6.25 17.01 6.25 16.05C6.25 15.09 7.04 14.3 8 14.3C8.96 14.3 9.75 15.09 9.75 16.05C9.75 17.01 8.96 17.8 8 17.8ZM10 4.75H6C5.59 4.75 5.25 4.41 5.25 4C5.25 3.59 5.59 3.25 6 3.25H10C10.41 3.25 10.75 3.59 10.75 4C10.75 4.41 10.41 4.75 10 4.75Z" />
        </SvgIcon>
    );
};
