import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18ForTests';
import { MemoryRouter } from 'react-router-dom';

interface componentRenderOptions {
    route?: string
}

export const componentRender = (children: ReactNode, options: componentRenderOptions = {}) => {
    const {
        route = '/',
    } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nForTests}>
                {children}
            </I18nextProvider>
        </MemoryRouter>,
    );
};
