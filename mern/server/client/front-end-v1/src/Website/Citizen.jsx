import Navigation from "./Navigation";
import Axios from "axios";
import { useState, useEffect } from 'react';


const Citizen = () => {

    useEffect(() => {
        Axios.get('http://localhost:3001/citizens/1835596247')
            .then(res => console.log(res.data)).catch(err => console.log(err))
    }, [])
       
    return (
        <>
            <h1>Citizen Page</h1>
            <Navigation />

        </>
    );
}

export default Citizen;