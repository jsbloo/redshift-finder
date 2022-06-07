import { BrowserRouter, Route, Routes } from "react-router-dom";


import Navigation from "./Navigation";
import Button from 'react-bootstrap/Button';
import ProfilePage from './ProfilePage';

const AppManager = () => {
    return ( 
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Navigation />} />
                
            </Routes>

            <Routes>
                
                <Route path="/" element={<ProfilePage />} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default AppManager;