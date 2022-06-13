import { Col, Row, Form, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Profile from "./Profile";
import { set } from "mongoose";

const FriendSearch = () => {
    const [profileList, setProfileList] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [id, setId] = useState("");
    const [deactivate, setDeactivate] = useState(false);
    const [visible, setVisible] = useState("hidden");

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
                })().then((e) => {
                    setProfileList(e);
                });
            })
            .catch((error) => {
                errMsg = error.message;
                console.log(error);
            })
            .finally(setDeactivate(true)
            ); 

        setVisible("visible");
        setLoaded(true);
    };

    const reset = () => {
        window.location.reload();
    };

    return (
        <>
            <Form>
                <Row className="mb-3 col-md-3 m-auto">
                    <Form.Group as={Col}>
                        <Form.Label>Person ID</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Person ID"
                            onChange={(e) => (setId(e.target.value))}
                        />
                    </Form.Group>
                </Row>
                <Button className="p-2 border" disabled={deactivate}
                    onClick={() => { getFriends();}}
                    style={{ backgroundColor: "#FFEA00", color: "black", margin: "1%", width:"100px"}}
                >
                    Stage
                </Button>
                <Button className="p-2 border " disabled={!deactivate}
                    onClick={() => { setId(id + " "); setDeactivate(false) }}
                    style={{ backgroundColor: "#50C878", color: "black", margin: "1%", width:"100px"}}
                >
                    Search
                </Button>
                <Button
                    className="p-2 border btn btn-danger"
                    onClick={() => {
                        reset();
                    }}
                    style={{ backgroundColor: "red", color: "black", margin: "1%", width:"100px"}}
                >
                    Reset
                </Button>
            </Form>
            <br></br>
            <h3 id="titleFont" style={{visibility: visible}}>Friends of : {id}</h3>
            <Container className="mt-5">
                <Row xs={1} md={2} className="g-4" id="centRow">
                    {profileList && loaded ? (
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
                        <h3 id="titleFont">No data yet</h3>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default FriendSearch;
