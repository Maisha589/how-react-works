import React from 'react';
import DEviceDetail from '../DeviceDetail/DEviceDetail';

const Device = (props) => {
    return (
        <div>
            <h2>I have: {props.name}</h2>
            <DEviceDetail price={props.price}></DEviceDetail>
        </div>
    );
};

export default Device;