import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import About from "./About"
import Friends from "./Friends"
import SearchById from "./SearchById"

const AppManager = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
                <Route path="/About" element={<About />} />
                <Route path="/Friends" element={<Friends />} />
                <Route path="/ById" element={<SearchById />} />
            </Routes>
        </BrowserRouter>
        
    );
};

export default AppManager;
