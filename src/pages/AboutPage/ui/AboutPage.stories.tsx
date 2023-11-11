import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import AboutPage from "pages/AboutPage/ui/AboutPage";

const meta: Meta<typeof AboutPage> = {
    title: 'pages/AboutPage',
    component: AboutPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof AboutPage>;
export const AboutPageLigth: Story = {
    args: {
    },
};

export const AboutPageDark: Story = {
    args: {
    },
};


AboutPageDark.decorators = [ThemeDecorator(Theme.DARK)]