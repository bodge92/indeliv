import InVoicesCard from "@/components/custom/InvoiceCard";
import InvoiceTable from "@/components/custom/InvoiceTable";
import React, { useState } from "react";

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
const Deliveries: React.FC = () => {
  const [invoices, setInvoices] = useState(initialData);
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [sortConfig, setSortConfig] = useState<{
    field: keyof InvoiceData;
    direction: SortDirection;
  } | null>(null);

  const handleSort = (field: keyof InvoiceData) => {
    let direction = SortDirection.ASC;
    if (sortConfig && sortConfig.field === field) {
      direction =
        sortConfig.direction === SortDirection.ASC
          ? SortDirection.DESC
          : SortDirection.NONE;
    }
    const sortedData = sortData(invoices, field, direction);
    setInvoices(sortedData);
    setSortConfig({ field, direction });
  };

  const handleSelectAllCheckbox = (checked: boolean) => {
    setSelectAllChecked(checked);
    const updatedInvoices = invoices.map((invoice: InvoiceData) => {
      return { ...invoice, checked: checked };
    });
    setInvoices(updatedInvoices);
  };

  const handleCheckboxChange = (index: number) => {
    const newInvoices = [...invoices];
    newInvoices[index].checked = !newInvoices[index].checked;
    setInvoices(newInvoices);
    setSelectAllChecked(newInvoices.every((invoice) => invoice.checked));
  };

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

export default Deliveries;
