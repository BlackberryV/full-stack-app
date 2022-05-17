import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import BrandBar from "../components/BrandBar";
import DeviceList from "../components/DeviceList";
import {useDispatch, useSelector} from "react-redux";
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceApi";
import {setBrands, setDevices, setTypes} from "../redux/slices/deviceSlice";

const Shop = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        fetchTypes().then(data => dispatch(setTypes(data)))
        fetchBrands().then(data => dispatch(setBrands(data)))
        fetchDevices().then(data => dispatch(setDevices(data.devices)))
    }, [])

    return (
        <Container>
            <Row className={"mt-3"}>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <BrandBar/>
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;