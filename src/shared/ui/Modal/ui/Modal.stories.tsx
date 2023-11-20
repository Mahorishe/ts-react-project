import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'shared/ui/Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
    },
};
export default meta;
type Story = StoryObj<typeof Modal>;
export const Ligth: Story = {
    args: {
        isOpen: true,
        children: 'quas quibusdam quis quos recusandae totam ullam vel voluptatum. Nisi.',
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'quas quibusdam quis quos recusandae totam ullam vel voluptatum. Nisi.',
    },
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
