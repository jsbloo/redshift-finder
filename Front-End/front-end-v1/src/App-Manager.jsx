import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Homepage/HomePage";
import Navigation from "./Routing/Navigation";


const AppManager = () => {
    return (

        <BrowserRouter>
            <Routes>
                
                <Route path="/" element={<HomePage />} />



            </Routes>




        </BrowserRouter>
    );
}

export default AppManager;