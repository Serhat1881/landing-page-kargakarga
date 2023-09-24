/* eslint-disable max-len */
import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Cross: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 15 15"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M0.147502 14.8524C0.193939 14.8989 0.249083 14.9358 0.309782 14.961C0.370481 14.9861 0.435544 14.9991 0.501252 14.9991C0.56696 14.9991 0.632023 14.9861 0.692722 14.961C0.753421 14.9358 0.808565 14.8989 0.855002 14.8524L7 8.70744L13.1475 14.8524C13.2413 14.9463 13.3686 14.999 13.5013 14.999C13.6339 14.999 13.7612 14.9463 13.855 14.8524C13.9488 14.7586 14.0015 14.6314 14.0015 14.4987C14.0015 14.366 13.9488 14.2388 13.855 14.1449L7.7075 7.99994L13.8525 1.85244C13.9463 1.75862 13.999 1.63137 13.999 1.49869C13.999 1.36601 13.9463 1.23876 13.8525 1.14494C13.7587 1.05112 13.6314 0.998413 13.4988 0.998413C13.3661 0.998413 13.2388 1.05112 13.145 1.14494L7 7.29244L0.852502 1.14744C0.756851 1.06553 0.633813 1.02272 0.507975 1.02759C0.382137 1.03245 0.262768 1.08461 0.17372 1.17366C0.0846731 1.26271 0.032507 1.38208 0.0276464 1.50791C0.0227858 1.63375 0.0655889 1.75679 0.147502 1.85244L6.2925 7.99994L0.147502 14.1474C0.0543766 14.2411 0.00210571 14.3678 0.00210571 14.4999C0.00210571 14.632 0.0543766 14.7588 0.147502 14.8524Z" />
        </SvgIcon>
    );
};
