/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const RotateLeft: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 25 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9.61008 5.08002C10.4801 4.82002 11.4401 4.65002 12.5001 4.65002C17.2901 4.65002 21.1701 8.53002 21.1701 13.32C21.1701 18.11 17.2901 21.99 12.5001 21.99C7.71008 21.99 3.83008 18.11 3.83008 13.32C3.83008 11.54 4.37008 9.88002 5.29008 8.50002"
                stroke="#3E9642"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.37012 5.32L11.2601 2"
                stroke="#3E9642"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M8.37012 5.32001L11.7401 7.78001"
                stroke="#3E9642"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
