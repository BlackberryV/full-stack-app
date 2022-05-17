import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ListGroup} from "react-bootstrap";
import {selectType} from "../redux/slices/deviceSlice";

const TypeBar = () => {
    const devices = useSelector(state => state.devices)
    const dispatch = useDispatch()
    return (
        <ListGroup>
            {devices.types.map(type => <ListGroup.Item
                active={devices.selectedType._id === type._id}
                onClick={() => dispatch(selectType(type))}
                style={{cursor: "pointer"}}
                key={type._id}>{type.name}</ListGroup.Item>)}
        </ListGroup>
    );
};

export default TypeBar;