import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage";

const AppManager = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Features" element={<Features />} />
            </Routes>
        </BrowserRouter>
        
    );
};

export default AppManager;
