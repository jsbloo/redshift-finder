import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";

const FriendSearch = () => {
    const [profileList, setProfileList] = useState("");
    const [loaded, setLoaded] = useState(false);  
    const [id, setId] = useState("");
    const [r, setR] = useState("");

    const rpImg = "http://xsgames.co/randomusers/assets/avatars/";
    const APICallString = "http://localhost:3002/friends/getById/";

    let errMsg = "";

    const getFriends = async () => {
        await axios
            .get(APICallString + id)
            .then((response) => {
                (async () => {
                    let p = [];
                    for await (const e of response.data) {
                        axios
                            .get(
                                "http://localhost:3002/persons/getById/" +
                                    e.friendId
                            )
                            .then((response) => {
                                p.push(response.data);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    }
                    console.log(p);
                    return p;
                })().then((e)=>{
                    console.log(profileList);
                    setProfileList(e);
                });
            })
            .catch((error) => {
                errMsg = error.message;
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
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Person ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Person ID"
                            onChange={(e) => (setId(e.target.value))}
                        />
                    </Form.Group>
                </Row>
                <Button className="p-2 border" onClick={() => getFriends()}>
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
            <br></br>
            <h3>Friends of : {id}</h3>
            <Container className="mt-5">
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

export default FriendSearch;
