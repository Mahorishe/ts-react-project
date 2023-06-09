import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/ui/AppLink";

interface NavBarProps {
    className?: string;
}
export const Navbar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>

            <div className={cls.links}>
                {" "}
                <AppLink
                    to="/"
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}>
                    Main
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    About
                </AppLink>
            </div>
        </div>
    );
};
