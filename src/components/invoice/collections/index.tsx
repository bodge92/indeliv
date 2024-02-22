import React, {useState} from "react";
import InvoiceTable from "@components/custom/InvoiceTable";
import InVoicesCard from "@/components/custom/InvoiceCard";
import {useSelector} from "react-redux";
import {RootState} from "@/stores";

type InvoiceData = {
    invoiceNo: string;
    date: string;
    buyer: string;
    company: string;
    amount: string;
    due: string;
    checked: boolean;
    overdueBy: string;
};

const initialData: InvoiceData[] = [
    {
        invoiceNo: "A114455",
        date: "20 Jan, 2023",
        buyer: "Moonstone Ventures LLP",
        company: "SS Sales",
        amount: "₹8,729.00",
        due: "₹7.00",
        overdueBy: "30 Days",
        checked: false,
    },
    {
        invoiceNo: "B13572",
        date: "20 Jan, 2023",
        buyer: "Daily Buy",
        company: "SS Sales",
        amount: "₹9,442.00",
        due: "₹7.00",
        overdueBy: "69 Days",
        checked: false,
    },
];


const Collections: React.FC = () => {
    const {query} = useSelector((state: RootState) => state.search);

    const filteredInvoices = initialData.filter((invoice) => {
        return (
            invoice.invoiceNo.toLowerCase().includes(query.toLowerCase()) ||
            invoice.buyer.toLowerCase().includes(query.toLowerCase())
        );
    });


    return (
        <>
            <div
                className="d-xs-none d-none d-md-block"
            >
                <InvoiceTable initialData={filteredInvoices}
                              showDropdown={true}
                              showCheckbox={true}
                />
            </div>
            <div className="d-xs-block mt-4 d-block d-md-none">
                {(!initialData || initialData.length === 0 || initialData.length === undefined) ? (
                    <div className="text-center p-5">No data found</div>
                ) : (
                    filteredInvoices.map((data, index) => (
                        <InVoicesCard
                            key={index}
                            initialData={data}
                        />
                    ))
                )}
            </div>
            <div
                className="fixed-bottom d-flex justify-content-center align-items-center p-3 create-batch-button-anchor "
            >
                <button
                    className="custom-button-mobile btn btn-primary w-auto w-full fw-bold d-flex align-items-center rounded-pill gap-6">

                    <div
                        className={"number-selected"}
                    >
                            <span>
                                {
                                    filteredInvoices.map((invoice) => invoice.checked).filter(Boolean).length
                                }
                            </span>
                    </div>
                    <span>Create Batch</span>
                </button>
            </div>
        </>
    );
};

export default Collections;
