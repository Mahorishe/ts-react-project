import type {Meta, StoryObj} from '@storybook/react';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";
import {Navbar} from "widgets/Navbar";

const meta: Meta<typeof Navbar> = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Navbar>;
export const NavbarLight: Story = {
    args: {
    },
};

export const NavbarDark: Story = {
    args: {
    },
};


NavbarDark.decorators = [ThemeDecorator(Theme.DARK)]
