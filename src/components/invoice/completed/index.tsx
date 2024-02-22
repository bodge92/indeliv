import InVoicesCard from "@/components/custom/InvoiceCard";
import InvoiceTable from "@/components/custom/InvoiceTable";
import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "@/stores";

type InvoiceData = {
  invoiceNo: string;
  date: string;
  buyer: string;
  company: string;
  amount: string;
  checked: boolean;
};

const initialData: InvoiceData[] = [
  {
    invoiceNo: "A114455",
    date: "20 Jan, 2023",
    buyer: "Moonstone Ventures LLP",
    company: "SS Sales",
    amount: "₹8,729.00",
    checked: false,
  },
  {
    invoiceNo: "B13572",
    date: "20 Jan, 2023",
    buyer: "Daily Buy",
    company: "SS Sales",
    amount: "₹9,442.00",
    checked: false,
  },
];

enum SortDirection {
  ASC = "ASC",
  DESC = "DESC",
  NONE = "NONE",
}

const sortData = (
  data: InvoiceData[],
  field: keyof InvoiceData,
  direction: SortDirection
) => {


  if (direction === SortDirection.NONE) return [...data];
  return [...data].sort((a, b) => {
    if (a[field] < b[field]) {
      return direction === SortDirection.ASC ? -1 : 1;
    }
    if (a[field] > b[field]) {
      return direction === SortDirection.ASC ? 1 : -1;
    }
    return 0;
  });
};
const Completed: React.FC = () => {

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
                <InvoiceTable  initialData={filteredInvoices}
                              showDropdown={false}
                              showCheckbox={false}

                />
            </div>
            <div
                className="d-xs-block mt-4 d-block d-md-none"
            >
                {filteredInvoices.map((data, index) => (
                    <InVoicesCard
                        key={index}
                        initialData={data}
                        showCheckbox={false}
                    />
                ))
                }
            </div>
    </>
  );
};

export default Completed;
