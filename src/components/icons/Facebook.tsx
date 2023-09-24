/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Facebook: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M9.23908 16V8.70218H11.6877L12.055 5.85725H9.23908V4.04118C9.23908 3.21776 9.4668 2.65661 10.6489 2.65661L12.1541 2.65599V0.111384C11.8938 0.0775563 11.0003 0 9.96029 0C7.78861 0 6.30184 1.32557 6.30184 3.75942V5.85725H3.84583V8.70218H6.30184V16H9.23908Z" />
        </SvgIcon>
    );
};
