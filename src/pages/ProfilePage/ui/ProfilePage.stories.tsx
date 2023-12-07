import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ProfilePage>;
export const ProfilePageLigth: Story = {
    args: {
    },
};
ProfilePageLigth.decorators = [StoreDecorator({})];

export const ProfilePageDark: Story = {
    args: {
    },
};

ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
