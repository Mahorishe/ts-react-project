import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerModule';
import { profileReducer } from 'entities/Profile';

const initialReducer: ReducersList = {
    profile: profileReducer,
};
const ProfilePage = () => {
    const { t } = useTranslation();
    return (
        <DynamicReducerLoader reducers={initialReducer} removeAfterUnmount>
            <h1>{t('Profile')}</h1>
        </DynamicReducerLoader>
    );
};
export default ProfilePage;
