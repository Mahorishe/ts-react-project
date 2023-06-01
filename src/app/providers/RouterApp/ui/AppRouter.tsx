import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { configAppRouter } from "../config/routeConfig/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(configAppRouter).map(({ path, element }) => (
                    <Route key={path} path={path} element={(<div className="page-wrapper">{element}</div>)} />
                ))}
            </Routes>
        </Suspense>
    );
};
