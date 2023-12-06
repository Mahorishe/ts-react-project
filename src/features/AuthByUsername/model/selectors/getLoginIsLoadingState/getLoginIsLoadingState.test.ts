import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginIsLoadingState,
} from 'features/AuthByUsername/model/selectors/getLoginIsLoadingState/getLoginIsLoadingState';

describe('getLoginIsLoadingState.test', () => {
    test('Should be return true', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                isLoading: true,
            },
        };
        expect(getLoginIsLoadingState(state as StateSchema)).toBe(true);
    });
    test('Should be return false', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLoadingState(state as StateSchema)).toBe(false);
    });
});
