import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD


import Navigation from "./Navigation";
import Button from 'react-bootstrap/Button';
=======
>>>>>>> ea727c613dd43bda2f0080b843853d1fdc79a5b7
import ProfilePage from './ProfilePage';

const AppManager = () => {
    return ( 
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Navigation />} />
                
            </Routes>

            <Routes>
                
                <Route path="/" element={<ProfilePage />} />
<<<<<<< HEAD
                
=======
>>>>>>> ea727c613dd43bda2f0080b843853d1fdc79a5b7
            </Routes>
        </BrowserRouter>
    );
}

export default AppManager;