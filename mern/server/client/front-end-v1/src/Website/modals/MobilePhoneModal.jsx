import { useState } from "react";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MobilePhoneModal = ({id}) => {
    
    const [show, setShow] = useState(false);
    const [mobileData, setMobileData] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const getMobile = async () => {
        const mobile = await axios.get(`http://localhost:3002/mobilePhone/getById/${id}`);
        setMobileData(mobile.data);
        handleShow();
    }

    return ( 
        <>
            <Button variant="primary" onClick={getMobile}>
                Display Mobile
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Mobile Phone</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Phone number : {mobileData.phoneNumber}</h4>
                    <h4>Network : {mobileData.operator}</h4>
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
 
export default MobilePhoneModal;