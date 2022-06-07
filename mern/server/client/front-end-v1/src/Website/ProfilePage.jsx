import { useState } from 'react';
import axios from 'axios';
import Profile from './Profile';
import Button from 'react-bootstrap/esm/Button';

 

const ProfilePage = () => {

    // State
    const [profileList, setProfileList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [searchText, setSearchText] = useState("none");
    const [searchText1, setSearchText1] = useState("none");
    const [searchText2, setSearchText2] = useState("none");
    const [searchText3, setSearchText3] = useState("none");

    const getPeople = async (event) => {
        var APICallString = 'http://localhost:3002/persons/getByFull/' + searchText + '/' + searchText1 + '/' + searchText2 + '/' + searchText3
        const people = await axios.get(APICallString)
            .then((response) => {
                setProfileList(response.data);
            }).catch((error) => {
                console.log(error);
            });
        setProfileList(people.data);
        setLoaded(true);
    }


    return (
        <>
            <h2> People: </h2>
            <label className='title'>Enter Given Name:</label>
            <input type='text' className='searchbox' onChange={e => setSearchText(e.target.value)}></input>
            <br />
            <br></br>
            <label className='title'>Enter Last Name:</label>
            <input type='text' className='searchbox' onChange={e => setSearchText1(e.target.value)}></input>
            <br />
            <br></br>
            <label className='title' >Place of Birth: </label>
            <input type='text' className='searchbox' onChange={e => setSearchText2(e.target.value)}></input>
            <br />
            <br></br>
            <label className='title'>Date of Birth:</label>
            <input type='text' className='searchbox' onChange={e => setSearchText3(e.target.value)}></input>
            <br></br>
            <br></br>

            <button className='searchbutton' onClick={e => getPeople(e)}>search for person</button>
            {/* <Button onClick={() => getPeople()}>Click me</Button> */}
            {
                profileList ?
                    profileList.map((p) => {
                        console.log(p);
                        return <Profile person={p} className="data" key={p._id} />
                    }) : <h3>No data yet</h3>
            }
        </>
    );
}

export default ProfilePage;
