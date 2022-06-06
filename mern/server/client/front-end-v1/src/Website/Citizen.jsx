import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import axios from "axios"

// const { citizenID, dateOfBirth, forenames, homeAddress, placeOfBirth, sex, surname, _id} = data1;

// https://jsonplaceholder.typicode.com/users

const Citizen = () => {

    const [data, setData] = useState([]);

    const getAllData = () => {
        axios.get("http://localhost:3001/citizens/1835596247")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        getAllData();
    }, []);

    return (
        <>
            <h1>Citizen Page</h1>
            <Navigation />
            {data ?
                data.map(data => {
                    return (
                        <div className="data" key={data._id}>
                            <h3>
                                {data.citizenID}
                                <br />
                                {data.dateOfBirth}
                                <br />
                                {data.forenames}
                                <br />
                                {data.homeAddress}
                                <br />
                                {data.placeOfBirth}



                                
                            </h3>
                        </div>
                    )
                }) : <h3>No data yet</h3>}


        </>
    );
}

export default Citizen;