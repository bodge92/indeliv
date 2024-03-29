import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {
    CollectionInterface,
    CompletedInterface,
    DeliveryInterface,
    SortDirection,
} from "@components/custom/InvoiceTable";
import {RootState} from "@/stores";
import {useSelector, useDispatch} from "react-redux";
import {toggleBatchCollectionSelection, toggleBatchDeliverySelection} from "@/stores/slices/batchSlice";

interface CollectionsProps {
    initialData: CollectionInterface | CompletedInterface | DeliveryInterface;
    showCheckbox?: boolean;
}

const Highlighter: React.FC<{ search: string; text: string }> = ({search, text}) => {

    const searchIndex = text.toLowerCase().indexOf(search.toLowerCase());
    if (searchIndex === -1) {
        return <>{text}</>;
    }
    const before = text.slice(0, searchIndex);
    const match = text.slice(searchIndex, searchIndex + search.length);
    const after = text.slice(searchIndex + search.length);
    return (
        <>
            {before}
            <span style={{
                color: "#0080FC",
            }}>{match}</span>
            {after}
        </>
    );
}

const InVoicesCard: React.FC<CollectionsProps> = ({initialData, showCheckbox = true}) => {
    const {
        invoiceNo,
        date,
        buyer,
        company,
        amount,
        due = "",
        checked,
        overdueBy,
    } = initialData;
    const {query} = useSelector((state: RootState) => state.search);
    const [isChecked, setIsChecked] = useState(checked);
    const location = useLocation();
    const dispatch = useDispatch();
    const handleCheckboxChange = () => {
        const path = location.pathname;

        if (path.includes("invoices/deliveries")) {
            setIsChecked(!isChecked);
            dispatch(toggleBatchDeliverySelection(initialData.invoiceNo));
        }

        if (path.includes("invoices/collections")) {
            setIsChecked(!isChecked);
            dispatch(toggleBatchCollectionSelection(initialData.invoiceNo));
        }
    };


    return (
        <div
            className={`card rounded-3 mb-3 ${
                isChecked ? "border-primary selected-card " : ""
            }`}
            style={{
                backgroundColor: isChecked ? " #E8F2FD" : "",
                border: isChecked ? "1px solid #99D5FF" : "",
            }}
        >
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-s gap-2">
                    <div className="d-flex flex-column justify-content-between gap-2">
                        <div className={`d-flex justify-content-start align-items-center`}>
                            <div className="custom-control custom-checkbox m-0"
                                 style={{
                                     display: showCheckbox ? "block" : "none",
                                 }}
                            >
                                {
                                    showCheckbox && (
                                        <input
                                            type="checkbox"
                                            className="custom-control-input pr-3"
                                            id={`checkbox`}
                                            checked={isChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                    )
                                }
                                <label
                                    className="custom-control-label m-0"
                                    htmlFor={`checkbox`}
                                ></label>
                            </div>
                            <b className="custom-control-label fw-medium text-12"
                               style={{
                                   marginLeft: showCheckbox ? "10px" : "0",
                               }}
                            >
                                <Highlighter
                                    search={query}
                                    text={invoiceNo}
                                />
                            </b>
                        </div>
                        <p className="text-color m-0">
                            <Highlighter
                                search={query}
                                text={buyer}
                            />
                        </p>
                    </div>
                    <div className="d-flex flex-column justify-content-between gap-2">
                        <Link
                            className="text-12 fw-bold m-0 fw-medium"
                            style={{color: "#0080FC"}}
                            to={"/dashboard/invoices/details"}
                        >
                            View details
                        </Link>
                        <p className="text-12 m-0">{amount}</p>
                    </div>
                </div>
                <hr className={isChecked ? "border-white m-1" : "border-dark m-1"}/>
                <div className="d-flex justify-content-start">
                    <div className={`w-100 ${isChecked ? "border-end border-white" : "border-end border-gray"}`}>
                        <p className="text-gray text-center m-0 text-12">Company</p>
                        <p className="text-center fw-medium text-black m-0 text-12">{company}</p>
                    </div>
                    {due && (
                        <div className={`w-100 ${isChecked ? "border-end border-white" : "border-end border-gray"}`}>
                            <p className="text-gray text-center m-0 text-12">Due</p>
                            <p className="text-center fw-medium text-black m-0 text-12">{due}</p>
                        </div>
                    )}
                    <div
                        className={`w-100 ${isChecked && due ? "border-end border-white" : due ? "border-end border-active" : "border-none"}`}
                    >
                        <p className="text-gray text-center m-0 text-12">Date</p>
                        <p className="text-center fw-medium text-black m-0 text-12">{date}</p>
                    </div>
                    {overdueBy && (
                        <div className="w-100">
                            <p className="text-gray text-center m-0 text-12">Overdue By</p>
                            <p className="text-center fw-medium text-black m-0 text-12">{overdueBy}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InVoicesCard;
