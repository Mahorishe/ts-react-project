import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerModule';
import {
    fetchProfileData,
    getProfileError,
    getProfileFormData,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidationErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileErrors,
} from 'entities/Profile';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispacth';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { ProfilePageHandler } from '../ui/ProfilePageHandler/ProfilePageHandler';

const initialReducer: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}
const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileFormData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidationErrors);

    const validateErrorsTranslates = {
        [ValidateProfileErrors.NO_DATA]: t('Данные отсутствуют'),
        [ValidateProfileErrors.INCORRECT_DATA]: t('Имя и фамилия обязательны к заполненению'),
        [ValidateProfileErrors.INCORRECT_AGE]: t('Неверно указан возраст'),
        [ValidateProfileErrors.INCORRECT_USERNAME]: t('Никнейм пользователя обязателен к заполнению'),
        [ValidateProfileErrors.SERVER_ERROR]: t('Серверная ошибка'),
    };

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
                {validateErrors && validateErrors.map((error) => (
                    <Text key={error} theme={TextTheme.ERROR} text={validateErrorsTranslates[error]} />
                ))}
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
