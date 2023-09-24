import React from 'react';
import { TextField } from '@mui/material';

interface CustomTextFieldProps {
  id: string;
  label: string;
  value: string;
  required: boolean;
  fullWidth: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  id,
  label,
  value,
  required,
  fullWidth,
  onChange,
}) => {
  return (
    <TextField
      id={id}
      label={label}
      variant="standard"
      fullWidth={fullWidth}
      required={required}
      value={value}
      onChange={onChange}
      sx={{
        width: '70%',
        marginTop: '2rem',
    }}
    />
  );
};

export default CustomTextField;
