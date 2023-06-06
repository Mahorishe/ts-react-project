import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
  className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
  const {t} = useTranslation()
  const [error, setError] = useState(false)
  useEffect(() => {
    if(error) {
      throw Error
    }
  }, [error])

  const callError = () => {
    setError(true)
  }
  return (
      <Button onClick={callError}>{t('Вызвать ошибку')}</Button>
  );
};