import { Box } from '@mui/material';
import React from 'react';

interface EllipseProps {
  top: number;
  width: number;
  height: number;
  right?: number;
  left?: number;
}

const Ellipse: React.FC<EllipseProps> = ({ top, right, left, width, height }) => {
  const styles: React.CSSProperties = {
    position: 'absolute',
    zIndex: -1,
    top: `${top}px`,
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: '50%',
    background: 'radial-gradient(50% 50% at 50% 50%, #4148FF 0%, rgba(65, 72, 255, 0.00) 100%)',
  };

  if (typeof right === 'number') {
    styles.right = `${right}px`;
  }

  if (typeof left === 'number') {
    styles.left = `${left}px`;
  }

  return (
    <Box sx={styles} />
  );
};

export default Ellipse;
