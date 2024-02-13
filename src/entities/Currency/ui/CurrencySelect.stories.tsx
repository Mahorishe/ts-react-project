import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from 'entities/Currency';

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/CurrencySelect',
    component: CurrencySelect,
    tags: ['autodocs'],
    argTypes: {
    },
};
export default meta;
type Story = StoryObj<typeof CurrencySelect>;
export const Primary: Story = {
    args: {},
};
