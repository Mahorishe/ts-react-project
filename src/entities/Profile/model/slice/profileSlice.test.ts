import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { profileReducer, profileActions } from '../slice/profileSlice';

describe('profileSlice.test', () => {
    test('Test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonlyProfile(true))).toEqual({ readonly: true });
    });
    test('Test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEditData())).toEqual({ readonly: true, validateErrors: undefined });
    });
    test('Test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: 'user' } };
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'admin' }))).toEqual({ form: { username: 'admin' } });
    });
    test('Test updateProfile.pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileErrors.NO_DATA] };
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({ isLoading: true, validateErrors: undefined });
    });
});
