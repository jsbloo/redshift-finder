import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import MobilePhoneModal from "./modals/MobilePhoneModal";

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
                    <MobilePhoneModal id={person.id}/>
                    </Card.Body>
                </Card>
        </>
    );
}
 
export default Profile;