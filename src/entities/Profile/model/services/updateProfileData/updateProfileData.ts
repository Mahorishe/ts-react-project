import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraConfig } from 'app/providers/StoreProvider';
import { Profile, ValidateProfileErrors } from '../../types/profile';
import { validationProfileData } from '../validationProfileData/validationProfileData';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkExtraConfig<ValidateProfileErrors[]>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileFormData(getState());

        const errors = validationProfileData(formData);

        if (errors.length) {
            return rejectWithValue(errors);
        }

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileErrors.SERVER_ERROR]);
        }
    },
);
