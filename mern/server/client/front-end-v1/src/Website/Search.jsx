import { Col, Row, Form, Button } from "react-bootstrap";
import { useState } from 'react';
import axios from 'axios';
import Profile from './Profile';




const Search = () => {
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
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Given Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Given Name" onChange={e => setSearchText(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" onChange={e => setSearchText1(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Place Of Birth</Form.Label>
                        <Form.Control type="text" placeholder="Enter City" onChange={e => setSearchText2(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control type="text" placeholder="Enter D.O.B" onChange={e => setSearchText3(e.target.value.toUpperCase())} />
                    </Form.Group>
                </Row>
                <Button onClick={e => getPeople(e)}>
                    Search
                </Button>
            </Form>
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

export default Search;