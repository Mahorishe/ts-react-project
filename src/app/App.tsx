import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/className";
import { AppRouter } from "./providers/RouterApp";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react";

export const App = () => {
    const { theme } = useTheme();
    return (
      <Suspense fallback="">
        <div className={classNames("app", { hovered: true }, [theme, "test"])}>
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
            
        </div>
      </Suspense>

    );
};
