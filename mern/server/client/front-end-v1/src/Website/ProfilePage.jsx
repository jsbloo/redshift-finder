import {useState, useEffect} from 'react';
import axios from 'axios';
import Profile from './Profile';
import Button from 'react-bootstrap/esm/Button';

const ProfilePage = () => {

    // State
    const [profileList, setProfileList] = useState([]); 
    const [loaded, setLoaded] = useState(false); 

    const getPeople = async () => {
        const people = await axios.get("http://localhost:3002/persons/getByFull/Timothy%20Glenn/Owen/LONDON/1954");
        setProfileList(people.data);
        setLoaded(true);
    }
    
    return(
        <>
            <h2> People: </h2>
            <Button onClick={() => getPeople()}>Click me</Button>
            {
                profileList ?
                    profileList.map((p) => {
                        console.log(p);
                        return <Profile person={p} className="data" key={p._id}/> 
                    }) : <h3>No data yet</h3>
            }
        </>
    );
}

export default ProfilePage;
