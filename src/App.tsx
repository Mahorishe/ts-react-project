import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import "./index.scss";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";

export const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/about" element={<AboutPageAsync />} />
                        <Route path="/" element={<MainPageAsync />} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
};
