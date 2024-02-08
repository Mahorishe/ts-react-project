import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginErrorState } from './getLoginErrorState';

describe('getLoginErrorState.test', () => {
    test('Should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error',
            },
        };
        expect(getLoginErrorState(state as StateSchema)).toBe('error');
    });
});
