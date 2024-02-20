import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarPhoto from 'shared/assets/tests/AvatarJS.png';

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ProfileCard>;
export const Profile: Story = {
    args: {
        data: {
            firstname: 'Nikolas',
            lastname: 'Keidh',
            age: 25,
            username: 'Alduin',
            currency: Currency.USD,
            country: Country.USA,
            avatar: AvatarPhoto,
        },
    },
};

export const ProfileDark: Story = {
    args: {
        data: {
            firstname: 'Nikolas',
            lastname: 'Keidh',
            age: 25,
            username: 'Alduin',
            currency: Currency.USD,
            country: Country.USA,
            avatar: AvatarPhoto,
        },
    },
};

ProfileDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const withError: Story = {
    args: {
        error: 'true',
    },
};

export const withErrorDark: Story = {
    args: {
        error: 'true',
    },
};

withErrorDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const withLoading: Story = {
    args: {
        isLoading: true,
    },
};

export const withLoadingDark: Story = {
    args: {
        isLoading: true,
    },
};

withLoadingDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
