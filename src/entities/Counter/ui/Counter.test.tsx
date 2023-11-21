import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen, waitFor } from '@testing-library/react';
import { Counter } from 'entities/Counter';
import { userEvent } from '@storybook/testing-library';

describe('Counter', () => {
    test('Test Counter', () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-counter')).toHaveTextContent('10');
    });
    test('Increment', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId('inc-btn'));
        await waitFor(() => expect(screen.getByTestId('value-counter')).toHaveTextContent('11'));
    });
    test('Decrement', async () => {
        componentRender(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        await userEvent.click(screen.getByTestId('dec-btn'));
        await waitFor(() => expect(screen.getByTestId('value-counter')).toHaveTextContent('9'));
    });
});
