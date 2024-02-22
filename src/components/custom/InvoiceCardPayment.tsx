import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import { Payment } from "../invoice/details";

interface CollectionsProps {
    initialData: Payment ;
}

const InVoicesCardPayment: React.FC<CollectionsProps> = ({initialData}) => {
    const {
        date,
        id,
        associate,
        paymentMethod,
        amount,
    } = initialData;

    return (
        <div className={`card rounded-3 mb-3`}
             
        >
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">

                            <b className="custom-control-label">ID#{id}</b>
                        <p>{date}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">

                            <b className="custom-control-label">{associate}(associate)</b>
                        <p>{amount}({paymentMethod})</p>
                </div>
            </div>
        </div>
    );
};

export default InVoicesCardPayment;
