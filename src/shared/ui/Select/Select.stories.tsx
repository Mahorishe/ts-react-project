import type { Meta, StoryObj } from '@storybook/react';
import { Select } from 'shared/ui/Select/Select';

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
    },
};
export default meta;
type Story = StoryObj<typeof Select>;
export const Primary: Story = {
    args: {
        label: 'Выберите из списка',
        options: [
            { value: '1', content: 'test1' },
            { value: '2', content: 'test2' },
            { value: '3', content: 'test3' },
        ],
    },
};
