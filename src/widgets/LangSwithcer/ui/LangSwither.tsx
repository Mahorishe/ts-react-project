import { classNames } from 'shared/lib/classNames/className';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';
import { useTranslation } from 'react-i18next';

interface LangSwitherProps {
  className?: string;
}

export const LangSwither = ({ className }: LangSwitherProps) => {

  const {t, i18n} = useTranslation()

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <div className={classNames('', {}, [className])}>
      <Button theme={ThemeButton.CLEAR} onClick={onToggle}>{t('Перевод')}</Button>
    </div>
  );
};