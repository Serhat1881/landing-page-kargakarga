import React, { ReactNode } from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { ReactNodeLike } from 'prop-types';

type CustomTypographyProps = TypographyProps & {
  children: ReactNode;
  customStyles?: React.CSSProperties;
  color?: string;
  icon?: ReactNodeLike; 
};

const CustomTypography: React.FC<CustomTypographyProps> = ({
  children,
  customStyles,
  color = 'tertiary.main',
  icon, 
  ...typographyProps
}) => {
  return (
    <Typography
      sx={{
        display: 'flex', 
        alignItems: 'center', 
        color: color,
        leadingTrim: 'both',
        textEdge: 'cap',
        fontSize: {
          xs: '2rem',
          sm: '2.5rem',
          md: '3rem',
        },
        fontStyle: 'normal',
        fontWeight: 800,
        letterSpacing: '0.96px',
        textTransform: 'uppercase',
        ...customStyles,
      }}
      {...typographyProps}
    >
      {children}
      {icon && <span>{icon}</span>} 
    </Typography>
  );
};

export default CustomTypography;
