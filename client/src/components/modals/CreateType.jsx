import React, {useEffect, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {createType} from "../../http/deviceApi";

const CreateType = ({show, handleClose}) => {
    const [name, setName] = useState('')

    const addType = () => {
        createType({name}).then(() => setName(''))
        handleClose();
    }

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create A Type</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder={"Name of type"}/>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-success" onClick={addType}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateType;