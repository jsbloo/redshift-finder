import React from "react";
import Navigation from "./Navigation";
import { useState } from "react";
import axios from "axios";


const HomePage = () => {
    const [searchText, setSearchText] = useState("")
    const [personData, setPersonData] = useState({})

    function searchForPerson(event) {
        // set up correct api call
        var APICallString = 'http://localhost:3002/persons/getByFull/' + searchText 

        //handle the api call
        axios.get(APICallString)
            //success
            .then((response) => {
                setPersonData(response.data);
            }).catch((error) => {
                console.log(error);
            });
    };
    console.log(personData)

    console.log(JSON.stringify(personData));



    return (
        <div className="homepage" >
            <h1>HomePage</h1>
            <Navigation />

            <div>
                <br />
                <br />
                <h5>person search</h5>
                <input type='text' onChange={e => setSearchText(e.target.value)}></input>
                <button onClick={e => searchForPerson(e)}>search for person</button>
            </div>
            
            {JSON.stringify(personData) != '{}' ?
                <>
                    <p>Forename: {personData.givenName}</p>
                    <p>Place of birth: {personData.placeOfBirth}</p>
                </>
                :
                <><p>no person data</p></>
            }

        </div>
    );
}

export default HomePage;