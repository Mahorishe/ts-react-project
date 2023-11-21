import { counterActions, counterReducer } from 'entities/Counter/model/slice/counterSlice';
import { CounterSchema } from 'entities/Counter';

describe('counterSlice.test', () => {
    test('Increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.increment)).toEqual({ value: 11 });
    });
    test('Decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, counterActions.decrement)).toEqual({ value: 9 });
    });
    test('Where state undefined', () => {
        expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    });
});
