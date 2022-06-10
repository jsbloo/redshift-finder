import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import About from "./About"
import Friends from "./Friends"

const AppManager = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Friends" element={<Friends />} />
            </Routes>
        </BrowserRouter>
        
    );
};

export default AppManager;
