import { StateSchema } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { getProfileFormData } from './getProfileFormData';

describe('getProfileFormData.test', () => {
    test('Should return profile data', () => {
        const data = {
            firstname: 'Nikolas',
            lastname: 'Keidh',
            age: 25,
            city: 'Los-Angeles',
            username: 'admin',
            currency: Currency.USD,
            country: Country.USA,
        };
        const state: DeepPartial<StateSchema> = {
            profile: { form: data },
        };
        expect(getProfileFormData(state as StateSchema)).toEqual(data);
    });
});
