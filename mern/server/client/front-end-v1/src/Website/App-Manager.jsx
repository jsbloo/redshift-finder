import { BrowserRouter, Route, Routes } from "react-router-dom";
import Citizen from "./Citizen";
import HomePage from "./HomePage";
import Navigation from "./Navigation";
import Button from 'react-bootstrap/Button';
import ProfilePage from './ProfilePage';

const AppManager = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProfilePage />} />
                <Route path="/" element={<Navigation />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppManager;