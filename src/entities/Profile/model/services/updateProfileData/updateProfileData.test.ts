import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncFunc/TestAsyncFunc';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileErrors } from 'entities/Profile';
import { updateProfileData } from './updateProfileData';

const data = {
    firstname: 'Nikolas',
    lastname: 'Keidh',
    age: 25,
    city: 'Los-Angeles',
    username: 'admin',
    currency: Currency.USD,
    country: Country.USA,
};
describe('loginByUsername.test', () => {
    test('Success update Profile', async () => {
        const thunk = new TestAsyncThunk(
            updateProfileData,
            {
                profile: {
                    form: data,
                },
            },
        );
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();
        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('Server error update Profile', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileErrors.SERVER_ERROR,
        ]);
    });
    test('User error update Profile', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, username: '' },
            },
        });
        const result = await thunk.callThunk();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([
            ValidateProfileErrors.INCORRECT_USERNAME,
        ]);
    });
});
