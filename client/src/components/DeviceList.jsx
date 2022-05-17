import React from 'react';
import {useSelector} from "react-redux";
import {Col, Row} from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = () => {
    const devices = useSelector(state => state.devices)
    devices.devices.map(e => console.log(e))
    return (
        <Row className={"d-flex"}>
            {devices.devices.map(device =>
                <DeviceItem key={device._id} device={device}/>
            )}
        </Row>
    );
};

export default DeviceList;