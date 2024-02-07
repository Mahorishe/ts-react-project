import { useTranslation } from 'react-i18next';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerModule';
import { profileReducer, fetchProfileData, ProfileCard } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispacth';

const initialReducer: ReducersList = {
    profile: profileReducer,
};
const ProfilePage = () => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    });

    return (
        <DynamicReducerLoader reducers={initialReducer} removeAfterUnmount>
            <ProfileCard />
        </DynamicReducerLoader>
    );
};
export default ProfilePage;
