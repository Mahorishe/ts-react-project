import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from 'pages/MainPage/ui/MainPage';

const meta: Meta<typeof MainPage> = {
    title: 'pages/MainPage',
    component: MainPage,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof MainPage>;
export const MainPageLigth: Story = {
    args: {
    },
};

export const MainPageDark: Story = {
    args: {
    },
};

MainPageDark.decorators = [ThemeDecorator(Theme.DARK)];
