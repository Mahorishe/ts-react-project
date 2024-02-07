import { createAsyncThunk } from '@reduxjs/toolkit';
import { Profile } from 'entities/Profile';
import { ThunkExtraConfig } from 'app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkExtraConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
