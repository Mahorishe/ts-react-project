import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
    test('Should return profile error', () => {
        const state: DeepPartial<StateSchema> = {
            profile: { error: 'error' },
        };
        expect(getProfileError(state as StateSchema)).toBe('error');
    });
});
