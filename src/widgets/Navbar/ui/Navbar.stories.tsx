import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Navbar } from 'widgets/Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Navbar>;
export const Light: Story = {
    args: {
    },
};

Light.decorators = [StoreDecorator({})];

export const Dark: Story = {
    args: {
    },
};

Dark.decorators = [StoreDecorator({})];
