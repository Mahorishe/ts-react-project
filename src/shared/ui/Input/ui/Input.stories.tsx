import type { Meta, StoryObj } from '@storybook/react';
import { Input } from 'shared/ui/Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Input>;
export const InputPrimary: Story = {
    args: {
        placeholder: 'Enter username',
        value: 'Alduin',
    },
};
