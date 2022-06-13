import { useState } from "react";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const PassportModal = ({id}) => {
    
    const [show, setShow] = useState(false);
    const [passportData, setPassportData] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const getPassport = async () => {
        const citizenID = await axios.get(`http://18.133.138.52:3002/person2citizen/getById/${id}`);
        const passportID = await axios.get(`http://18.133.138.52:3002/citizen2passport/getById/${citizenID.data.citizenId}`);
        const passport = await axios.get(`http://18.133.138.52:3002/passport/getById/${passportID.data.passportId}`);
        setPassportData(passport.data);
        handleShow();
    }

    return ( 
        <>
            <Button variant="primary" onClick={getPassport}>
                Passport
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Passport</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Passport number : {passportData.passportNumber}</h4>
                    <h4>Nationality : {passportData.nationality}</h4>
                    <h4>Issuing country : {passportData.issuingCountry}</h4>
                    <h4>Date of issue : {passportData.dateOfIssue}</h4>
                    <h4>Date of expiry : {passportData.dateOfExpiry}</h4>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
  );
}
 
export default PassportModal;