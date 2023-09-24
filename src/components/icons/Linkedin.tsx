/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Linkedin: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M14.3999 14.4V9.71201C14.3999 7.40801 13.9039 5.64801 11.2159 5.64801C9.91993 5.64801 9.05593 6.35201 8.70393 7.02401H8.67193V5.85601H6.12793V14.4H8.78393V10.16C8.78393 9.04001 8.99193 7.96801 10.3679 7.96801C11.7279 7.96801 11.7439 9.23201 11.7439 10.224V14.384H14.3999V14.4Z"
                fill="currentColor"
            />
            <path
                d="M1.80762 5.85602H4.46362V14.4H1.80762V5.85602Z"
                fill="currentColor"
            />
            <path
                d="M3.13561 1.60001C2.28761 1.60001 1.59961 2.28801 1.59961 3.13601C1.59961 3.98401 2.28761 4.68801 3.13561 4.68801C3.98361 4.68801 4.67161 3.98401 4.67161 3.13601C4.67161 2.28801 3.98361 1.60001 3.13561 1.60001Z"
                fill="currentColor"
            />
        </SvgIcon>
    );
};
