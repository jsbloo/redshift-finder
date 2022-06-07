import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import { Button, ListGroup } from "react-bootstrap";

const Profile = ({ person }) => {
    console.log(person);
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAUNs75AJUhmKFc4fMI_hCfqd96vPWmUFyA&usqp=CAU" />
                <Card.Body style={{ borderstyle: 'solid' }}>
                    <Card.Title >{person.lastName}</Card.Title>
                    <Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item>id: {person.id}</ListGroup.Item>
                            <ListGroup.Item>dob: {person.dob}</ListGroup.Item>
                            <ListGroup.Item>forenames: {person.givenName}</ListGroup.Item>
                            <ListGroup.Item>pob: {person.placeOfBirth}</ListGroup.Item>
                            <ListGroup.Item>citizenship: {person.isCitizen}</ListGroup.Item>
                            <ListGroup.Item>gender: {person.sex}</ListGroup.Item>
                            <ListGroup.Item>nationality: {person.nationality}</ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Passport</Button>
                    <Button variant="primary">Financial</Button>
                    <Button variant="primary">Address</Button>
                    <Button variant="primary">Mobile Phone</Button>
                </Card.Footer>
            </Card>
        </>
    );
}

export default Profile;