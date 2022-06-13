import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Profile from "./Profile";

const Search = () => {
    const [profileList, setProfileList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [found, setFound] = useState(false);

    const personNotFoundElement = (
        <div>
            <br />
            <h1>People Not Found</h1>
        </div>
    );

    let searchTxt = "none";
    let searchTxt1 = "none";
    let searchTxt2 = "none";
    let searchTxt3 = "none";

    const rpImg = "http://xsgames.co/randomusers/assets/avatars/";

    const getPeople = async () => {
        if (searchTxt == "") {
            searchTxt = "none";
        }
        if (searchTxt1 == "") {
            searchTxt1 = "none";
        }
        if (searchTxt2 == "") {
            searchTxt2 = "none";
        }
        if (searchTxt3 == "") {
            searchTxt3 = "none";
        }

        var APICallString =
        "http://localhost:3002/persons" +
        "/getByFull/" +
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
                console.log(APICallString)
                setProfileList(response.data);
                setFound("");
            })
            .catch((error) => {
                setFound(personNotFoundElement);
                setProfileList([]);
                console.log(error);
            });
        setLoaded(true);
    };

    const reset = () => {
        window.location.reload();
    };

    return (
        <>
            <Form>
                <Row className="m-auto col-md-7">
                    <Form.Group as={Col} >
                        <Form.Label id="titleFont">Given Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Given Name"
                            onChange={(e) => (searchTxt = e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label id="titleFont" >Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Last Name"
                            onChange={(e) => (searchTxt1 = e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label id="titleFont" >Place Of Birth</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter City"
                            onChange={(e) =>
                                (searchTxt2 = e.target.value.toUpperCase())
                            }
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label id="titleFont" >Date Of Birth</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter D.O.B"
                            onChange={(e) => (searchTxt3 = e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Button className="p-2 border"
                    onClick={() => getPeople()}
                    style={{ backgroundColor: "#555555", margin: "0.5%", width:"90px" }} >
                    Search
                </Button>
                <Button
                    className="p-2 border"
                    onClick={() => {
                        reset();
                    }}
                    style={{ backgroundColor: "#555555", margin: "0.5%", width:"90px" }} >
                
                    Reset
                </Button>
            </Form>
       
            <a href="/ById">Have a person ID?</a>
            
            <Container className="mt-5">

                {found}

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
