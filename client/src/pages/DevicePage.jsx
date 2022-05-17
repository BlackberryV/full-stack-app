import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {useParams} from "react-router-dom";
import {fetchDeviceById} from "../http/deviceApi";

const DevicePage = () => {

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchDeviceById(id).then(data => setDevice(data))
    }, [])
    return (
        <Container className={"mt-3"}>
            <Col md={4}>
                <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.image}/>
            </Col>
            <Col md={4}>
                <Row>
                    <Col>
                        <h2>{device.name}</h2>
                        <div>{device.rating}</div>
                    </Col>
                </Row>
            </Col>
            <Col md={4}>{
                // device.info.map((i) => {
                    // <Row key={i._id}>{i.title}: {i.description}</Row>
                // })
            }</Col>
        </Container>
    );
};

export default DevicePage;