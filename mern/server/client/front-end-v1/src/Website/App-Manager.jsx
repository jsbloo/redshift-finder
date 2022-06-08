import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage";

const AppManager = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppManager;
