import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncFunc/TestAsyncFunc';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

describe('loginByUsername.test', () => {
    test('Success get Profile', async () => {
        const data = {
            firstname: 'Nikolas',
            lastname: 'Keidh',
            age: 25,
            city: 'Los-Angeles',
            username: 'admin',
            currency: Currency.USD,
            country: Country.USA,
        };

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });
    test('Error get Profile', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
