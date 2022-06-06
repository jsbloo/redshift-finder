import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const Profile = ({person}) => {
    console.log(person);
    return (
        <>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>{person.lastName}</Card.Title>
                    <Card.Text>
                    <div className="person">
                    <small>
                        {person.id}
                        <br />
                        {person.dob}
                        <br />
                        {person.givenName}
                        <br />
                        {person.placeOfBirth}
                        <br />
                        {person.isCitizen}
                        <br />
                        {person.sex}
                        <br />
                        {person.nationality}  
                     </small>
                </div>
                </Card.Text>
                    <Button variant="primary">Passport</Button>
                    <Button variant="primary">Financial</Button>
                    <Button variant="primary">Address</Button>
                    <Button variant="primary">Mobile Phone</Button>
                    </Card.Body>
                </Card>
        </>
    );
}
 
export default Profile;