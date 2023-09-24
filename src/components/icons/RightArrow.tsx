import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const RightArrow: React.FC<SvgIconProps> = (props) => {
    return (
        <SvgIcon
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d={`M23.7528 12.2355C23.7602 12.2246 23.7652 12.2128 23.7713 12.2014C23.7783 
                    12.1884 23.7862 12.1762 23.7917 12.1625C23.7978 12.1478 23.8014 12.1322 23.8059 
                    12.1169C23.8091 12.1058 23.8134 12.095 23.8158 12.0834C23.8269 12.0285 23.8269 
                    11.9718 23.8158 11.9169C23.8136 11.9055 23.8092 11.8952 23.8061 11.8841C23.8017 11.8686 
                    23.798 11.8529 23.7917 11.8378C23.7862 11.8244 23.7784 11.8122 23.7716 11.7994C23.7653 
                    11.7879 23.7603 11.7759 23.7528 11.7648C23.7374 11.7414 23.7197 11.7197 23.7 11.7L17.3024 
                    5.30239C17.1367 5.13667 16.8681 5.13667 16.7024 5.30239C16.5367 5.46811 16.5367 5.73667 16.7024 
                    5.90239L22.3759 11.5758L0.600128 11.5757C0.365648 11.5757 0.175809 11.7656 0.175929 11.9999C0.17581 
                    12.1172 0.223329 12.2232 0.300129 12.3C0.376929 12.3768 0.483009 12.4244 0.600128 12.4244L22.3759 
                    12.4242L16.7025 18.0976C16.5368 18.2633 16.5368 18.5319 16.7025 18.6976C16.8682 18.8633 17.1368 
                    18.8633 17.3025 18.6976L23.7 12.3C23.7197 12.2804 23.7374 12.2586 23.7528 12.2355Z`}
                fill="currentColor"
            />
        </SvgIcon>
    );
};

