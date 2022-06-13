import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Profile from "./Profile";

const Search = () => {
    const [profileList, setProfileList] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [found, setFound] = useState(false);

    let searchTxt = "";

    const personNotFoundElement = (
        <div>
            <br />
            <h1>People Not Found</h1>
        </div>
    );

    const rpImg = "http://xsgames.co/randomusers/assets/avatars/";

    const getPerson = async () => {

        var APICallString =
            "http://localhost:3002/persons" +
            "/getById/" + searchTxt;
        await axios
            .get(APICallString)
            .then((response) => {
                setProfileList([response.data]);
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
                <Row className="mb-3 m-5">
                    <Form.Group as={Col}>
                        <Form.Label>Person ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter ID"
                            onChange={(e) => (searchTxt = e.target.value)}
                        />
                    </Form.Group>
                </Row>
                <Button className="p-2 border" onClick={() => getPerson()}>
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
