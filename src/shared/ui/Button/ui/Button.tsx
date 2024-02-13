import {
    ButtonHTMLAttributes, FC, memo, ReactNode,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
    M = 'size-m',
    L = 'size-l',
    XL = 'size-xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    children?: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {
        children, theme = ButtonTheme.OUTLINE, square, size = ButtonSize.M, className, disabled, ...otherProps
    } = props;
    const mods: Mods = {
        [cls[size]]: size,
        [cls[theme]]: theme,
        [cls.square]: square,
        [cls.disabled]: disabled,
    };
    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
});
