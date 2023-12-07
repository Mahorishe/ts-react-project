import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not-found'
}

export const AppRouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
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
    [AppRoutes.PROFILE]: {
        path: AppRouterPaths.profile,
        element: <ProfilePage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: AppRouterPaths['not-found'],
        element: <NotFoundPage />,
    },
};
