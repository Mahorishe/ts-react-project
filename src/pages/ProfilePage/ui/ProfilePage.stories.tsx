import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import ProfilePage from 'pages/ProfilePage/ui/ProfilePage';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarPhoto from 'shared/assets/tests/AvatarJS.png';

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
ProfilePageLigth.decorators = [StoreDecorator({
    profile: {
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
})];

export const ProfilePageDark: Story = {
    args: {
    },
};

ProfilePageDark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
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
})];
