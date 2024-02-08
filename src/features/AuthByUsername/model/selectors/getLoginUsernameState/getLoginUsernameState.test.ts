import { StateSchema } from 'app/providers/StoreProvider';
import {
    getLoginUsernameState,
} from 'features/AuthByUsername/model/selectors/getLoginUsernameState/getLoginUsernameState';

describe('getLoginUsernameState.test', () => {
    test('Should be return admin', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'admin',
            },
        };
        expect(getLoginUsernameState(state as StateSchema)).toBe('admin');
    });
    test('Should be return empty string', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsernameState(state as StateSchema)).toBe('');
    });
});
