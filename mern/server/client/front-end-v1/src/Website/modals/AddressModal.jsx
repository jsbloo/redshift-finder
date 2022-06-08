import { useState } from "react";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddressModal = ({id}) => {
    
    const [show, setShow] = useState(false);
    const [addressData, setAddressData] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const getAddress = async () => {
        const addressID = await axios.get(`http://localhost:3002/person2address/getById/${id}`);
        const address = await axios.get(`http://localhost:3002/address/getById/${addressID.data.addressId}`);
        setAddressData(address.data);
        handleShow();
    }

    return ( 
        <>
            <Button variant="primary" onClick={getAddress}>
                Address
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>House Number : {addressData.houseNumber}</h4>
                    <h4>Street Name : {addressData.streetName}</h4>
                    <h4>Town : {addressData.town}</h4>
                    <h4>Postcode : {addressData.postcode}</h4>
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
 
export default AddressModal;