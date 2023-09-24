import type { ButtonProps, SvgIconProps } from '@mui/material';
import { Button, CircularProgress } from '@mui/material';
import React from 'react';

import VIcon, { type VIconProps } from '../miscellaneous/VIcon';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {}
}
export interface VButtonProps extends ButtonProps {
    children?: React.ReactNode;
    startIconName?: VIconProps['iconName'];
    endIconName?: VIconProps['iconName'];
    iconProps?: SvgIconProps;
    loading?: boolean;
}

const VButton: React.FC<VButtonProps> = ({
    children,
    startIconName,
    endIconName,
    iconProps,
    loading = false,
    ...props
}) => {
    const StartIcon = startIconName ? (
        <VIcon iconName={startIconName} {...iconProps} />
    ) : null;
    const EndIcon = endIconName ? (
        <VIcon iconName={endIconName} {...iconProps} />
    ) : null;

    return (
        <Button startIcon={StartIcon} endIcon={EndIcon} {...props}>
            {loading ? (
                <CircularProgress size="1.5rem" color="quaternary" />
            ) : (
                children
            )}
        </Button>
    );
};

export default VButton;
