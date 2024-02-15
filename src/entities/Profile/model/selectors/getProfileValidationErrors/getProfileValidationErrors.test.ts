import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from 'entities/Profile';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileFormData.test', () => {
    test('Should return profile SERVER_ERROR', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.SERVER_ERROR,
                ],
            },
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.SERVER_ERROR,
        ]);
    });
    test('Should return profile SERVER_ERROR, INCORRECT_AGE', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.SERVER_ERROR,
                    ValidateProfileErrors.INCORRECT_AGE,
                ],
            },
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.SERVER_ERROR,
            ValidateProfileErrors.INCORRECT_AGE,
        ]);
    });
    test('Should return profile NO_DATA', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.NO_DATA,
                ],
            },
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.NO_DATA,
        ]);
    });
});
