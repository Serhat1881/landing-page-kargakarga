import { SvgIcon, type SvgIconProps } from '@mui/material';
import React from 'react';

export const Youtube: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                // eslint-disable-next-line max-len
                d="M18.9789 14.6865C18.7628 15.4898 18.1295 16.123 17.3264 16.3393C15.8591 16.7407 9.99001 16.7407 9.99001 16.7407C9.99001 16.7407 4.12113 16.7407 2.65388 16.3545C1.86619 16.1384 1.21742 15.4897 1.00136 14.6865C0.615234 13.2194 0.615234 10.1767 0.615234 10.1767C0.615234 10.1767 0.615234 7.11876 1.00136 5.66696C1.21765 4.86382 1.85074 4.23061 2.654 4.01432C4.13658 3.61275 9.99023 3.61275 9.99023 3.61275C9.99023 3.61275 15.8591 3.61275 17.3264 3.99899C18.1296 4.21516 18.7628 4.84837 18.9791 5.65151C19.3651 7.11876 19.3651 10.1613 19.3651 10.1613C19.3651 10.1613 19.3806 13.2194 18.9789 14.6865ZM8.12141 7.36584V12.9876L13.0019 10.1767L8.12141 7.36584Z"
            />
        </SvgIcon>
    );
};
