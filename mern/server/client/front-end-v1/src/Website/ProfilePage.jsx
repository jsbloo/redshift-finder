import { useState } from 'react';
import axios from 'axios';
import Profile from './Profile';

const ProfilePage = () => {

    // State
    const [profileList, setProfileList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [searchText, setSearchText] = useState("")
    const [searchText1, setSearchText1] = useState("")
    const [searchText2, setSearchText2] = useState("")
    const [searchText3, setSearchText3] = useState("")

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
            <h2> Citizen Database: </h2>
            <div className='personForm'>
                <label >Enter Given Name</label>
                <input className='personInput' type='text' placeholder='Given Name' required="required" onChange={e => setSearchText(e.target.value)}></input>
                <br />
                <label >Enter Last Name</label>
                <input className='personInput' type='text' placeholder='Last Name' onChange={e => setSearchText1(e.target.value)}></input>
                <br />
                <label >Place of Birth</label>
                <input className='personInput' type='text' placeholder='Birth City' onChange={e => setSearchText2(e.target.value)}></input>
                <br />
                <label >D.O.B</label>
                <input className='personInput' type='text' placeholder='D.O.B' onChange={e => setSearchText3(e.target.value)}></input>
                <button className='personButton' onClick={e => getPeople(e)}>search for person</button>
            </div>
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
