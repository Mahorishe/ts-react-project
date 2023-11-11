import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Loader} from "shared/ui/Loader";
import {Theme} from "app/providers/ThemeProvider";


const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Loader>;
export const LoaderLigth: Story = {
    args: {
    },
};
export const LoaderDark: Story = {
    args: {
    },
};
LoaderDark.decorators = [ThemeDecorator(Theme.DARK)]
