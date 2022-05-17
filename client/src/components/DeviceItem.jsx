import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {

    return (
        <Col md={3} className={"mt-3"}>
            <Card style={{width: 150, cursor: "pointer"}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.image}/>
                <div className={"text-black-50 d-flex justify-content-between mt-2"}>
                    <div>Samsung</div>
                    <div>
                        <div>{device.rating}</div>
                    </div>
                </div>
                <NavLink to={`${SHOP_ROUTE}/${device._id}`}>{device.name}</NavLink>
            </Card>
        </Col>
    );
};

export default DeviceItem;