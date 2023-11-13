import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwither } from 'widgets/LangSwithcer';
import { Button } from 'shared/ui/Button';
import { ButtonSize, ButtonTheme } from 'shared/ui/Button/ui/Button';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { AppRouterPaths } from 'app/providers/RouterApp';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };
    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.menu}>
                <AppLink
                    to={AppRouterPaths.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.menuItem}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    to={AppRouterPaths.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.menuItem}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={cls.collapsedBtn}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '<' : '>'}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwither className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
};
