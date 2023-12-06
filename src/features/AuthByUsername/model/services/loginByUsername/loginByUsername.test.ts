import axios from 'axios';
import { StateSchema } from 'app/providers/StoreProvider';
import { Dispatch } from '@reduxjs/toolkit';
import { userActions } from 'entities/User';
import { TestAsyncFunc } from 'shared/lib/tests/TestAsyncFunc/TestAsyncFunc';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
describe('loginByUsername.test', () => {
    let dispatch: Dispatch;
    let getState: () => StateSchema;
    beforeEach(() => {
        dispatch = jest.fn();
        getState = jest.fn();
    });
    test('Success Login', async () => {
        const userData = { username: '123', id: '1' };
        mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
        const thunk = new TestAsyncFunc(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        expect(thunk.dispatch).toBeCalledTimes(3);
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(userData);
    });
    test('Error Login', async () => {
        mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const thunk = new TestAsyncFunc(loginByUsername);
        const result = await thunk.callThunk({ username: '123', password: '123' });
        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(mockedAxios.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
