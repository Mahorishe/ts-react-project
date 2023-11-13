import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import cls from './Navbar.module.scss';

interface NavBarProps {
    className?: string;
}
export const Navbar = ({ className }: NavBarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>

        <div className={cls.links}>
            {' '}

        </div>
    </div>
);
