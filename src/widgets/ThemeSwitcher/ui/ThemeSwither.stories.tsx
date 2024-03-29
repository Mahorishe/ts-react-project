import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;
export const ThemeSwitcherLigth: Story = {
    args: {
    },
};

export const ThemeSwitcherDark: Story = {
    args: {
    },
};

ThemeSwitcherDark.decorators = [ThemeDecorator(Theme.DARK)];
