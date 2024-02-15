import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export enum ValidateProfileErrors {
    INCORRECT_DATA = 'INCORRECT_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_USERNAME = 'INCORRECT_USERNAME',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    firstname?: string,
    lastname?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile,
    form?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean,
    validateErrors?: ValidateProfileErrors[]
}
