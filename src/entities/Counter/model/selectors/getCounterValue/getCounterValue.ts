import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';
import { CounterSchema } from 'entities/Counter';

export const getCounterValue = createSelector(getCounter, (state: CounterSchema) => state.value);
