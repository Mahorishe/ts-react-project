import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginUsernameState = (state: StateSchema) => state?.login?.username || '';
