import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface LangSwitherProps {
  className?: string;
  short?: boolean
}

export const LangSwither = memo(({ className, short }: LangSwitherProps) => {
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <div className={classNames('', {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={onToggle}>{t(short ? 'Мини язык' : 'Язык')}</Button>
        </div>
    );
});
