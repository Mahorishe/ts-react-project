import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/lib/classNames/className";
import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, theme, className, ...otherProps } = props;
    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </button>
    );
};
