import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import AvatarJS from 'shared/ui/Avatar/AvatarJS.png';

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
    },
};
export default meta;
type Story = StoryObj<typeof Avatar>;
export const Primary: Story = {
    args: {
        src: AvatarJS,
        size: 150,
    },
};

export const Small: Story = {
    args: {
        src: AvatarJS,
        size: 50,
    },
};
