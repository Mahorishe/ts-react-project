import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Sidebar } from 'widgets/Sidebar';
import { PageError } from 'widgets/PageError';

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof PageError>;
export const PageErrorLignt: Story = {
    args: {
    },
};
export const PageErrorDark: Story = {
    args: {
    },
};
PageErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
