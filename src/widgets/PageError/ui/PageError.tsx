import { classNames } from 'shared/lib/classNames/className';

import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const {t} = useTranslation()
  const pageReload = () => {
    location.reload()
  }
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t('Возникла непредвиденная ошибка')}
      <Button onClick={pageReload}>{t('Обновить страницу')}</Button>
    </div>
  );
};