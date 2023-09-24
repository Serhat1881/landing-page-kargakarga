import type { Meta, StoryObj } from '@storybook/react';

import VIcon from '@/components/miscellaneous/VIcon';

const meta: Meta<typeof VIcon> = {
    title: 'Components/Misc/VIcon',
    component: VIcon,
};

export default meta;
type Story = StoryObj<typeof VIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
    args: {
        iconName: 'twitter',
    },
};
