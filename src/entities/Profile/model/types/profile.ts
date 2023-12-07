export interface Profile {
    'firstname': string,
    'lastname': string,
    'age': number,
    'currency': 'RUB',
    'country': 'Russia',
    'city': string,
    'username': string,
    'avatar': string
}

export interface ProfileSchema {
    data?: Profile,
    isLoading: boolean,
    error?: string,
    readonly: boolean
}
