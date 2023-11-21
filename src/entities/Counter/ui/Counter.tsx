import { Button } from 'shared/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const countValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };
    return (
        <div>
            <h1 data-testid="value-counter">
                {countValue}
            </h1>
            <Button
                data-testid="inc-btn"
                onClick={increment}
            >
                {t('Increment')}
            </Button>
            <Button
                data-testid="dec-btn"
                onClick={decrement}
            >
                {t('Decrement')}
            </Button>
        </div>
    );
};
