import { BrowserRouter, Route, Routes } from "react-router-dom";
import Citizen from "./Citizen";
import HomePage from "./HomePage";
import Navigation from "./Navigation";


const AppManager = () => {
    return (

        <BrowserRouter>
            {/* <Navigation/> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/citizen" element={<Citizen/>} />




            </Routes>
        </BrowserRouter>
    );
}

export default AppManager;