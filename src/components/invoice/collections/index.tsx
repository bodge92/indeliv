import React, {useState} from "react";
import InvoiceTable from "@components/custom/InvoiceTable";
import InVoicesCard from "@/components/custom/InvoiceCard";

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

    return (
       <>
                  <div
                className="d-xs-none d-none d-md-block"
            >
                <InvoiceTable  initialData={initialData}
                              showDropdown={true}
                              showCheckbox={true}
                />
            </div>
            <div
                className="d-xs-block mt-4 d-block d-md-none"
            >
                {initialData.map((data, index) => (
                    <InVoicesCard
                        key={index}
                        initialData={data}
                        
                    />
                ))
                }
            </div>
       </>
    );
};

export default Collections;
