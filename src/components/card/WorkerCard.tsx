import { Stack, Typography } from '@mui/material';
import React from 'react';
import VDisplayImage from '../displays/VDisplayImage';

interface WorkerCardProps {
  name: string;
  job: string;
  imgSrc: string;
  imgAlt: string;
}

const WorkerCard: React.FC<WorkerCardProps> = ({ name, job, imgSrc, imgAlt }) => {
  return (
    <Stack spacing={2}>
      <VDisplayImage
        src={imgSrc}
        alt={imgAlt}
        width={440}
        height={1}
        layout="responsive"
      />
      <Typography component="h5" sx={{
        fontSize: '2rem',
        color: 'tertiary.main',
        fontWeight: 700,
        letterSpacing: '0.6px',
      }}>
        {name}
      </Typography>
      <Typography component="p" sx={{
        fontSize: '1.5rem',
        fontWeight: 400,
        color: 'tertiary.main',
      }}>
        {job}
      </Typography>
    </Stack>
  );
}

export default WorkerCard;
