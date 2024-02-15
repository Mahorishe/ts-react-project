import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validationProfileData = (profile?: Profile) => {
    if (!profile) {
        return [ValidateProfileErrors.NO_DATA];
    }

    const {
        firstname, lastname, age, username,
    } = profile;

    const errors: ValidateProfileErrors[] = [];

    if (!firstname || !lastname) {
        errors.push(ValidateProfileErrors.INCORRECT_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ValidateProfileErrors.INCORRECT_AGE);
    }

    if (!username) {
        errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
    }

    return errors;
};
