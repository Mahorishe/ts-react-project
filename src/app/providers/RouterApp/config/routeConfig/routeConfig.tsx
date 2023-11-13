import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not-found'
}

export const AppRouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',
};

export const configAppRouter: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: AppRouterPaths.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: AppRouterPaths.about,
        element: <AboutPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: AppRouterPaths['not-found'],
        element: <NotFoundPage />,
    },
};
