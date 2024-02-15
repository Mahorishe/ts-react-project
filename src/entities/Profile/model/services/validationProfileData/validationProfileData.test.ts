import { TestAsyncFunc } from 'shared/lib/tests/TestAsyncFunc/TestAsyncFunc';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ValidateProfileErrors } from '../../types/profile';
import { validationProfileData } from './validationProfileData';

const data = {
    firstname: 'Nikolas',
    lastname: 'Keidh',
    age: 25,
    city: 'Los-Angeles',
    username: 'admin',
    currency: Currency.USD,
    country: Country.USA,
};
describe('validationProfileData.test', () => {
    test('Return []', () => {
        const result = validationProfileData(data);
        expect(result).toEqual([]);
    });
    test('Return NCORRECT_DATA, INCORRECT_AGE, INCORRECT_USERNAME', () => {
        const result = validationProfileData({});
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_DATA, ValidateProfileErrors.INCORRECT_AGE, ValidateProfileErrors.INCORRECT_USERNAME]);
    });
    test('Return error INCORRECT_AGE', () => {
        const result = validationProfileData({ ...data, age: 0 });
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });
    test('Return error INCORRECT_DATA', () => {
        const result = validationProfileData({ ...data, firstname: '', lastname: '' });
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_DATA]);
    });
    test('Return error INCORRECT_USERNAME', () => {
        const result = validationProfileData({ ...data, username: '' });
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USERNAME]);
    });
});
