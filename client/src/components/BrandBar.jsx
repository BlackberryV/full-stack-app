import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {selectBrand} from "../redux/slices/deviceSlice";

const BrandBar = () => {
    const devices = useSelector(state => state.devices)
    const dispatch = useDispatch()
    return (
        <Row className={"d-flex"}>
            {devices.brands.map(brand =>
                <Col key={brand._id}>
                    <Card
                        border={brand._id === devices.selectedBrand._id ? 'danger' : 'light'}
                        onClick={() => dispatch(selectBrand(brand))}
                        style={{cursor: "pointer"}}
                        className={"p-3"}>{brand.name}</Card>
                </Col>
            )}
        </Row>
    );
};

export default BrandBar;