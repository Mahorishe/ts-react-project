import { loginReducer, LoginSchema } from 'features/AuthByUsername';
import { loginActions } from 'features/AuthByUsername/model/slice/loginSlice';

describe('loginSlice.test', () => {
    test('Set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin'))).toEqual({ username: 'admin' });
    });
    test('Set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('123'))).toEqual({ password: '123' });
    });
});
