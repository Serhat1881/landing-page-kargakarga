import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Star: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
        width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M12.1992 0.669922C13.3564 6.75411 18.115 11.5127 24.1992 12.6699C18.115 13.8271 13.3564 18.5857 12.1992 24.6699C11.042 18.5857 6.28341 13.8271 0.199219 12.6699C6.28341 11.5127 11.042 6.75411 12.1992 0.669922Z" fill="white"/>

        </SvgIcon>
    );
};
