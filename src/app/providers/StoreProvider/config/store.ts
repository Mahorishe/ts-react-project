import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export const createStore = (initialState?: StateSchema) => {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer,
    };
    return configureStore<StateSchema>({

        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
};
