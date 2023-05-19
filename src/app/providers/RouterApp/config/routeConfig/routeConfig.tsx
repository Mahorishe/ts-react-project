import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

enum AppRoutes {
    MAIN = "main",
    ABOUT = "about",
}

const AppRouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
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
};
