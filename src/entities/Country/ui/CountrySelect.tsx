import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { Country } from '../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean
}

const options = [
    { value: Country.Russia, content: Country.Russia },
    { value: Country.China, content: Country.China },
    { value: Country.USA, content: Country.USA },
    { value: Country.Italy, content: Country.Italy },
    { value: Country.Japan, content: Country.Japan },
    { value: Country.Sweden, content: Country.Sweden },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        readonly,
    } = props;

    const { t } = useTranslation('profile');

    const handleChange = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);
    return (
        <Select
            className={classNames('', {}, [className])}
            label={t('Валюта')}
            value={value}
            options={options}
            onChange={handleChange}
            readonly={readonly}
        />
    );
});
