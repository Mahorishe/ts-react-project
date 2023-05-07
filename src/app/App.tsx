import { Suspense, useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import "./styles/index.scss";
import { MainPage } from "../pages/MainPage";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { className } from "../shared/lib/classNames/className";

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={className("app", { hovered: true }, [theme, "test"])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to="/">Main</Link>
            <Link to="/about">About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};
