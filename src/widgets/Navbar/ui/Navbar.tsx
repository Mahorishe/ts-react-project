import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string;
}
export const Navbar = ({ className }: NavBarProps) => {
    const { t, i18n } = useTranslation();
    const [isAuthModal, setIsAuthOpen] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthOpen((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button className={cls.links} theme={ButtonTheme.CLEAR_INVERTED} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            {/* eslint-disable-next-line i18next/no-literal-string */}
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                quas quibusdam quis quos recusandae totam ullam vel voluptatum. Nisi.
            </Modal>
        </div>
    );
};
