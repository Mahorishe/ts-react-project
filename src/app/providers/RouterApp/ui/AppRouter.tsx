import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { configAppRouter } from "../config/routeConfig/routeConfig";
import { PageLoader } from "widgets/PageLoader";

export const AppRouter = () => {
    return (
            <Routes>
                {Object.values(configAppRouter).map(({ path, element }) => (
                    <Route key={path} path={path} element={(<div className="page-wrapper"><Suspense fallback={<PageLoader/>}>{element}</Suspense></div>)} />
                ))}
            </Routes>
    );
};
