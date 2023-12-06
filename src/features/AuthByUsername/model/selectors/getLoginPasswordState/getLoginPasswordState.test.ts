import { fireEvent, getByTestId, screen } from '@testing-library/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginPasswordState,
} from 'features/AuthByUsername/model/selectors/getLoginPasswordState/getLoginPasswordState';

describe('getLoginPasswordState.test', () => {
    test('Should be return 123', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                password: '123',
            },
        };
        expect(getLoginPasswordState(state as StateSchema)).toBe('123');
    });
    test('Should be return empty string', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPasswordState(state as StateSchema)).toBe('');
    });
});
