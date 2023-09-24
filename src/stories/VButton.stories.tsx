import { Typography } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import VButton from '@/components/buttons/VButton';

const meta: Meta<typeof VButton> = {
    title: 'Components/Form Elements/VButton',
    component: VButton,
};

export default meta;
type Story = StoryObj<typeof VButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        children: <Typography>Test Button</Typography>,
    },
};

export const Outlined: Story = {
    args: {
        children: <Typography>Test Button</Typography>,
        variant: 'outlined',
    },
};

export const Text: Story = {
    args: {
        children: <Typography>Test Button</Typography>,
        variant: 'text',
    },
};

export const Contained: Story = {
    args: {
        children: <Typography>Test Button</Typography>,
        variant: 'contained',
    },
};
