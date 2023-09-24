import type { SvgIconProps } from '@mui/material';
import { SvgIcon } from '@mui/material';
import React from 'react';

export const Plus: React.FC<SvgIconProps> = (props) => {
  return (
    <SvgIcon
      width="108"
      height="107"
      viewBox="0 0 108 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M41.7273 54H66.7273" stroke="#0B1519" stroke-width="2" stroke-linecap="square" />
      <path d="M54.7273 41L54.7273 66" stroke="#0B1519" stroke-width="2" stroke-linecap="square" />
    </SvgIcon>
  );
};
