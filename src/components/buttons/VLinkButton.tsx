import type { LinkProps } from 'next/link';
import Link from 'next/link';
import React from 'react';

import VButton, { type VButtonProps } from './VButton';

export interface VLinkButtonProps extends VButtonProps {
    href: string;
    passHref?: LinkProps['passHref'];
    legacyBehavior?: LinkProps['legacyBehavior'];
    children: React.ReactNode;
}

const VLinkButton: React.FC<VLinkButtonProps> = ({
    href,
    passHref,
    legacyBehavior,
    children,
    ...buttonProps
}) => {
    return (
        <Link href={href} passHref={passHref} legacyBehavior={legacyBehavior}>
            <VButton {...buttonProps}>{children}</VButton>
        </Link>
    );
};

export default VLinkButton;
