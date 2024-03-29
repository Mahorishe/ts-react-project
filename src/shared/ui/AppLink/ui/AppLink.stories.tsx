import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    args: {
        to: '/',
    },
};
export default meta;
type Story = StoryObj<typeof AppLink>;
export const Primary: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.PRIMARY,
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export const Secondary: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const SecondaryDark: Story = {
    args: {
        children: 'Link',
        theme: AppLinkTheme.SECONDARY,
    },
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
