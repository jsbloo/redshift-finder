import { useState } from "react";
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BankAccountModal = ({id}) => {
    
    const [show, setShow] = useState(false);
    const [accountData, setAccountData] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const getAccount = async () => {
        const accountID = await axios.get(`http://localhost:3002/person2bankaccount/getById/${id}`);
        console.log(accountID.data);
        const account = await axios.get(`http://localhost:3002/bankaccount/getById/${accountID.data.bankaccountId}`);
        setAccountData(account.data);
        handleShow();
    }

    return ( 
        <>
            <Button variant="primary" onClick={getAccount}>
                Bank
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Bank Account</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Account number : {accountData.accountNumber}</h4>
                    <h4>Bank : {accountData.bank}</h4>
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
 
export default BankAccountModal;