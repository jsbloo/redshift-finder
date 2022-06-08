import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import ProfilePage from './ProfilePage';
import Features from './Features';

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
}

export default AppManager;