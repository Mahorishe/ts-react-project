import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {NotFoundPage} from "pages/NotFoundPage";

const meta: Meta<typeof NotFoundPage> = {
    title: 'pages/NotFoundPage',
    component: NotFoundPage,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof NotFoundPage>;
export const NotFoundPageLigth: Story = {
    args: {
    },
};

export const NotFoundPageDark: Story = {
    args: {
    },
};


NotFoundPageDark.decorators = [ThemeDecorator(Theme.DARK)]