import Card from "react-bootstrap/Card";
import { Button, ListGroup } from "react-bootstrap";
import MobilePhoneModal from "./modals/MobilePhoneModal";
import AddressModal from "./modals/AddressModal";
import PassportModal from "./modals/PassportModal";
import BankAccountModal from "./modals/BankAccountModal";

const Profile = ({ person, randomPerson }) => {
    console.log(person);
    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={randomPerson + person.sex.toLowerCase()}
                />
                <Card.Body style={{ borderstyle: "solid" }}>
                    <Card.Title>{person.lastName}</Card.Title>
                    <Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item>id: {person.id}</ListGroup.Item>
                            <ListGroup.Item>dob: {person.dob}</ListGroup.Item>
                            <ListGroup.Item>
                                forenames: {person.givenName}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                pob: {person.placeOfBirth}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                citizenship: {person.isCitizen}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                gender: {person.sex}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                nationality: {person.nationality}
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <PassportModal id={person.id} />
                    <BankAccountModal id={person.id} />
                    <AddressModal id={person.id} />
                    <MobilePhoneModal id={person.id} />
                </Card.Footer>
            </Card>
        </>
    );
};

export default Profile;
