import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerModule';
import {
    profileReducer,
    fetchProfileData,
    ProfileCard,
    getProfileIsLoading,
    getProfileError, getProfileFormData, getProfileReadonly, profileActions,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispacth';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { ProfilePageHandler } from '../ui/ProfilePageHandler/ProfilePageHandler';

const initialReducer: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}
const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    const handleChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

    const handleChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const handleChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const handleChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const handleChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const handleChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const handleChangeCurrency = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const handleChangeCountry = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <DynamicReducerLoader reducers={initialReducer} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHandler />
                <ProfileCard
                    data={formData}
                    error={error}
                    isLoading={isLoading}
                    readonly={readonly}
                    onChangeFirstname={handleChangeFirstname}
                    onChangeLastname={handleChangeLastname}
                    onChangeAge={handleChangeAge}
                    onChangeCity={handleChangeCity}
                    onChangeUsername={handleChangeUsername}
                    onChangeAvatar={handleChangeAvatar}
                    onChangeCurrency={handleChangeCurrency}
                    onChangeCountry={handleChangeCountry}
                />
            </div>
        </DynamicReducerLoader>
    );
};
export default ProfilePage;
