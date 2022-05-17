import React, {useState} from 'react';
import {Button, Col, Dropdown, Form, Modal, Row} from "react-bootstrap";
import {useSelector} from "react-redux";

const CreateDevice = ({show, handleClose}) => {
    const devices = useSelector(state => state.devices)
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState(null);
    const [brand, setBrand] = useState(null);
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', _id: Date.now()}])
    }

    const deleteInfo = (_id) => {
        setInfo(info.filter(i => i._id !== _id))
    }

    const selectFile = (e) => {
        setFile(e.target.files[0])
    }

    console.log(price)

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create A Device</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>Select Type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {devices.types.map(type => <Dropdown.Item key={type._id}>{type.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className={"mt-2 mb-2"}>
                        <Dropdown.Toggle>Select Brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {devices.brands.map(brand => <Dropdown.Item key={brand._id}>{brand.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={"mt-2 mb-2"}
                        placeholder={"Name of device"}/>
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className={"mt-2 mb-2"}
                        type={"number"}
                        placeholder={"Price of device"}/>
                    <Form.Control
                        onChange={selectFile}
                        className={"mt-2 mb-2"}
                        type={"file"}/>
                    <hr/>
                    <Button variant={"outline-dark"} onClick={addInfo}>Add new info</Button>
                    {info.map((i) =>
                        <Row className={"mt-3"} key={i._id}>
                            <Col md={4}>
                                <Form.Control placeholder={'Title'}/>
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder={'Description'}/>
                            </Col>
                            <Col md={4}>
                                <Button variant={"outline-danger"} onClick={() => deleteInfo(i._id)}>Delete</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="outline-success" onClick={handleClose}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateDevice;