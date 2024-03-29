import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Sidebar>;
export const SidebarLigth: Story = {
    args: {
    },
};
export const SidebarDark: Story = {
    args: {
    },
};
SidebarDark.decorators = [ThemeDecorator(Theme.DARK)];
