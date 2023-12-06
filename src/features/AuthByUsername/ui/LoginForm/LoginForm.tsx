import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { memo, useCallback, useEffect } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { loginActions, loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import {
    getLoginUsernameState,
} from 'features/AuthByUsername/model/selectors/getLoginUsernameState/getLoginUsernameState';
import {
    getLoginPasswordState,
} from 'features/AuthByUsername/model/selectors/getLoginPasswordState/getLoginPasswordState';
import {
    getLoginIsLoadingState,
} from 'features/AuthByUsername/model/selectors/getLoginIsLoadingState/getLoginIsLoadingState';
import { getLoginErrorState } from 'features/AuthByUsername/model/selectors/getLoginErrorState/getLoginErrorState';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerModule';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string
}

const initialReducers: ReducersList = {
    login: loginReducer,
};

const LoginForm = memo((props: LoginFormProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsernameState);
    const password = useSelector(getLoginPasswordState);
    const isLoading = useSelector(getLoginIsLoadingState);
    const error = useSelector(getLoginErrorState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);
    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);
    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, username, password]);
    return (
        <DynamicReducerLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                <Text title={t('Форма авторизации')} />
                {error && <Text text={error} theme={TextTheme.ERROR} />}
                <Input
                    type="text"
                    placeholder={t('Введите никнейм')}
                    className={cls.inputForm}
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type="text"
                    placeholder={t('Введите пароль')}
                    className={cls.inputForm}
                    onChange={onChangePassword}
                    value={password}
                />
                <Button
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    theme={ButtonTheme.OUTLINE}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicReducerLoader>

    );
});

export default LoginForm;
