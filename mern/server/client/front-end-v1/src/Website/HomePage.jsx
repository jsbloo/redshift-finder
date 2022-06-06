import React from "react";
import Navigation from "./Navigation";
import EmptyModal from "./modals/EmptyModal";

const HomePage = () => {


    return (
        <div className="homepage" >
            <h1>HomePage</h1>
            <Navigation />
            <EmptyModal />
           

        </div>
    );
}

export default HomePage;