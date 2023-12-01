import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LoginForm>;
export const Primary: Story = {
    args: {
    },
};

Primary.decorators = [StoreDecorator({ login: { username: 'Admin', password: '123' } })];

export const Dark: Story = {
    args: {
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({ login: { username: 'Admin', password: '123' } })];
