import React from "react";
import { Product } from "../invoice/details";


interface CollectionsProps {
    initialData: Product;
    index: number;
}

const InVoicesCardProduct: React.FC<CollectionsProps> = ({initialData, index}) => {
    const {
        item,
        qty,
        price,
    } = initialData;


  

    return (
        <div className={`card rounded-3 mb-3`}             
        >
            <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">

                            <b className="custom-control-label">0{index+1}</b>
                        <p>{item}</p>
                        <p>{qty}</p>
                        <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default InVoicesCardProduct;
