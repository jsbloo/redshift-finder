import Card from "react-bootstrap/Card";
import { Button, ListGroup } from "react-bootstrap";
import MobilePhoneModal from "./modals/MobilePhoneModal";
import AddressModal from "./modals/AddressModal";
import PassportModal from "./modals/PassportModal";
import BankAccountModal from "./modals/BankAccountModal";

const Profile = ({ person, randomPerson }) => {
    return (
        <>
            <Card style={{ width: "18rem"}} className="m-1">
                <Card.Img className="p-2"
                    variant="top"
                    src={randomPerson + person.sex.toLowerCase()}
                />
                <Card.Body style={{ borderstyle: "solid" }}>
                    <Card.Title>{person.givenName + " " + person.lastName}</Card.Title>
                    <Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item><strong>Person ID:</strong> {person.id}</ListGroup.Item>
                            <ListGroup.Item><strong>Date of Birth:</strong> {person.dob.substring(0,9)}</ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Surname:</strong> {person.lastName}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Forenames:</strong> {person.givenName}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Place of Birth:</strong> {person.placeOfBirth}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Citizenship of UK:</strong> {person.isCitizen}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Gender:</strong> {person.sex}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <strong>Nationality:</strong> {person.nationality}
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
