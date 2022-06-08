import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import { set } from "mongoose";

const Search = () => {
    const [profileList, setProfileList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [inputValue, setInputValue] = useState("");

    let searchTxt = "none";
    let searchTxt1 = "none";
    let searchTxt2 = "none";
    let searchTxt3 = "none";

    const rpImg = "https://xsgames.co/randomusers/avatar.php?g=";

    const getPeople = async () => {

        if(searchTxt == ""){searchTxt="none";}
        if(searchTxt1 == ""){searchTxt1="none";}
        if(searchTxt2 == ""){searchTxt2="none";}
        if(searchTxt3 == ""){searchTxt3="none";}

        var APICallString =
            "http://localhost:3002/persons/getByFull/" +
            searchTxt +
            "/" +
            searchTxt1 +
            "/" +
            searchTxt2 +
            "/" +
            searchTxt3;
        await axios
            .get(APICallString)
            .then((response) => {
                setProfileList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        setLoaded(true);
    };

    const reset = () => {
        // setProfileList([]); //this is smarter way to reset
        // searchTxt = "none";
        // searchTxt1 = "none";
        // searchTxt2 = "none";
        // searchTxt3 = "none";

        window.location.reload();

    };

    return (
        <>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Given Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Given Name"
                            onChange={(e) => (searchTxt = e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            onChange={(e) => (searchTxt1 = e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Place Of Birth</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter City"
                            onChange={(e) =>
                                (searchTxt2 = e.target.value.toUpperCase())
                            }
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Date Of Birth</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter D.O.B"
                            onChange={(e) => (searchTxt3 = e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Button className="p-2 border" onClick={() => getPeople()}>
                    Search
                </Button>
                <Button
                    className="p-2 border"
                    onClick={() => {
                        reset();
                    }}
                >
                    Reset
                </Button>
            </Form>

            <Container>
                <Row xs={1} md={2} className="g-4">
                    {profileList ? (
                        profileList.map((p) => {
                            return (
                                <Profile
                                    person={p}
                                    randomPerson={rpImg}
                                    className="data"
                                    key={p._id}
                                />
                            );
                        })
                    ) : (
                        <h3>No data yet</h3>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Search;
