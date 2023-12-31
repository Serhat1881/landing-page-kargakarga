/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Search: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 20 20"
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9.58341 17.5001C13.9557 17.5001 17.5001 13.9557 17.5001 9.58341C17.5001 5.21116 13.9557 1.66675 9.58341 1.66675C5.21116 1.66675 1.66675 5.21116 1.66675 9.58341C1.66675 13.9557 5.21116 17.5001 9.58341 17.5001Z"
                stroke="#3E9642"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M18.3334 18.3334L16.6667 16.6667"
                stroke="#3E9642"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </SvgIcon>
    );
};
