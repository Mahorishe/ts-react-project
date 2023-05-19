import { Link } from "react-router-dom";
import "./styles/index.scss";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";
import { classNames } from "../shared/lib/classNames/className";
import { AppRouter } from "./providers/RouterApp";
import { Navbar } from "widgets/Navbar";

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames("app", { hovered: true }, [theme, "test"])}>
            <Navbar />
            <AppRouter />
        </div>
    );
};
