import { createAsyncThunk } from '@reduxjs/toolkit';
import { getProfileFormData, Profile } from 'entities/Profile';
import { ThunkExtraConfig } from 'app/providers/StoreProvider';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkExtraConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, getState } = thunkAPI;

        const formData = getProfileFormData(getState());
        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);
