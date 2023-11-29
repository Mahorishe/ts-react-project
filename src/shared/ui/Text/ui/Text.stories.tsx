import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Text>;
export const Primary: Story = {
    args: {
        title: 'Auth Form',
        text: 'This is block with description',
    },
};

export const Dark: Story = {
    args: {
        title: 'Auth Form',
        text: 'This is block with description',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const withError: Story = {
    args: {
        title: 'Auth Form',
        text: 'This is block with description',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'Auth Form',
    },
};

export const onlyText: Story = {
    args: {
        text: 'This is block with description',
    },
};
