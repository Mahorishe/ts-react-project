import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispacth';
import { updateProfileData } from 'entities/Profile/model/services/updateProfileData/updateProfileData';
import cls from './ProfilePageHandler.module.scss';

interface ProfilePageHandlerProps {
    className?: string;
}

export const ProfilePageHandler = (props: ProfilePageHandlerProps) => {
    const { className } = props;
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const handleEdit = useCallback(() => {
        dispatch(profileActions.setReadonlyProfile(false));
    }, [dispatch]);

    const handleCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEditData());
    }, [dispatch]);

    const handleSaveChanges = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePageHandler, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly ? (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={handleEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <>
                    <Button
                        className={cls.cancelBtn}
                        theme={ButtonTheme.OUTLINE_RED}
                        onClick={handleCancelEdit}
                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        className={cls.saveBtn}
                        theme={ButtonTheme.OUTLINE}
                        onClick={handleSaveChanges}
                    >
                        {t('Сохранить')}
                    </Button>
                </>
            )}
        </div>
    );
};
