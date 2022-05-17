import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useState} from 'react'
import {createBrand, createType} from "../../http/deviceApi";

const CreateBrand = ({show, handleClose}) => {
    const [name, setName] = useState('')

    const addBrand = () => {
        createBrand({name}).then(() => setName(''))
        handleClose();
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create A Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder={"Name of Brand"}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-success" onClick={addBrand}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateBrand;