import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
    const [brandShow, setBrandShow] = useState(false);
    const [typeShow, setTypeShow] = useState(false);
    const [deviceShow, setDeviceShow] = useState(false);
    return (
        <Container className={"d-flex flex-column"}>
            <Button
                onClick={() => setTypeShow(true)}
                className={"mt-2 p-2"} variant={"outline-dark"}>Add type</Button>
            <Button
                onClick={() => setBrandShow(true)}
                className={"mt-2 p-2"} variant={"outline-dark"}>Add brand</Button>
            <Button
                onClick={() => setDeviceShow(true)}
                className={"mt-2 p-2"} variant={"outline-dark"}>Add device</Button>
            <CreateBrand show={brandShow} handleClose={() => setBrandShow(false)}/>
            <CreateDevice show={deviceShow} handleClose={() => setDeviceShow(false)}/>
            <CreateType show={typeShow} handleClose={() => setTypeShow(false)}/>
        </Container>
    );
};

export default Admin;