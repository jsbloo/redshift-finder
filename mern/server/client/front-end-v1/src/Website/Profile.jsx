import Navigation from "./Navigation";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card"
import MobilePhoneModal from "./modals/MobilePhoneModal";
import AddressModal from "./modals/AddressModal";
import PassportModal from "./modals/PassportModal";
import BankAccountModal from "./modals/BankAccountModal";
import Container from"react-bootstrap/Container"
import { Col, Row, Button, } from "react-bootstrap";

const Profile = ({person}) => {
    console.log(person);
    return (
        <>
            <Container>
                    <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                    <Col>
                    <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsAUNs75AJUhmKFc4fMI_hCfqd96vPWmUFyA&usqp=CAU" />
                        <Card.Body style={{borderstyle: 'solid'}}>
                        <Card.Title >{person.lastName}</Card.Title>
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
                    <PassportModal id={person.id}/>
                    <BankAccountModal id={person.id}/>
                    <AddressModal id={person.id}/>
                    <MobilePhoneModal id={person.id}/>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
                </Row>
            </Container>
        </>
    );
}
 
export default Profile;