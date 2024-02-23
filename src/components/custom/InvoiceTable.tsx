import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

export interface CollectionInterface {
    invoiceNo: string;
    date: string;
    buyer: string;
    company: string;
    amount: string;
    due: string;
    checked: boolean;
    overdueBy: string;
}

export type CompletedInterface = {
    invoiceNo: string;
    date: string;
    buyer: string;
    company: string;
    amount: string;
    checked: boolean;
    due?: string;
    overdueBy?: string;
};

export type DeliveryInterface = {
    invoiceNo: string;
    date: string;
    buyer: string;
    company: string;
    amount: string;
    checked: boolean;
    due?: string;
    overdueBy?: string;
};

export enum SortDirection {
    ASC = "ASC",
    DESC = "DESC",
    NONE = "NONE",
}

export interface CollectionsProps {
    initialData: CollectionInterface[] | CompletedInterface[] | DeliveryInterface[];
    showDropdown: boolean;
    showCheckbox?: boolean;
}

const InvoiceTable: React.FC<CollectionsProps> = ({initialData, showDropdown, showCheckbox}) => {
    const [invoices, setInvoices] = useState(initialData);
    const [selectAllChecked, setSelectAllChecked] = useState(false);
    const [sortConfig, setSortConfig] = useState<{
        field: keyof CollectionInterface;
        direction: SortDirection;
    } | null>(null);

    useEffect(() => {
        setInvoices(initialData);
    }, [initialData]);

    if (!initialData || initialData.length === 0 || initialData.length === undefined) {
        return (
            <div className="text-center p-5">No data found</div>
        );
    }

    const sortData = (
        data: (CollectionInterface | CompletedInterface | DeliveryInterface)[],
        field: keyof CollectionInterface,
        direction: SortDirection
    ) => {
        if (direction === SortDirection.NONE) return [...data];

        return [...data].sort((a, b) => {
            if (a[field] !== undefined && b[field] !== undefined) {
                if (a[field]! < b[field]!) {
                    return direction === SortDirection.ASC ? -1 : 1;
                } else if (a[field]! > b[field]!) {
                    return direction === SortDirection.ASC ? 1 : -1;
                }
            }
            return 0;
        });
    };


    const handleSort = (field: keyof CollectionInterface) => {
        const direction =
            sortConfig && sortConfig.field === field
                ? sortConfig.direction === SortDirection.ASC
                    ? SortDirection.DESC
                    : SortDirection.ASC
                : SortDirection.ASC;

        const sortedData = sortData(invoices, field, direction);
        setInvoices(sortedData);
        setSortConfig({field, direction});
    };


    const handleSelectAllCheckbox = (checked: boolean) => {
        setSelectAllChecked(checked);
        const updatedInvoices = invoices.map((invoice) => ({
            ...invoice,
            checked,
        }));
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
            <table className="table-stripe-rounded">
                <thead>
                <tr>
                    {showCheckbox && (
                        <th>
                            <input
                                type="checkbox"
                                className="checkbox select-all"
                                checked={selectAllChecked}
                                onChange={(e) => handleSelectAllCheckbox(e.target.checked)}
                            />
                        </th>
                    )}
                    {Object.keys(initialData[0])
                        .slice(0, -1)
                        .map((key, index) => (
                            <th key={index} className="fw-medium">
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                                {showDropdown && index !== Object.keys(initialData[0]).length - 2 && (
                                    <div className="dropdown">
                                        <span>
                                            <img src={"/assets/Icon/Up-Down Arrow.svg"} alt="sort"/>
                                        </span>
                                        <div className="dropdown-content">
                                            <div
                                                className="dropdown-item"
                                                onClick={() => handleSort(key as keyof CollectionInterface)}
                                            >
                                                <img src={"/assets/Icon/SortAtoZ.svg"} alt="sort a to z"/>
                                                {sortConfig?.field === key &&
                                                    sortConfig.direction === SortDirection.ASC && (
                                                        <img src={"/assets/Icon/SortActive.svg"} alt="sort z to a"/>
                                                    )}
                                            </div>
                                            <div
                                                className="dropdown-item"
                                                onClick={() =>
                                                    handleSort(key as keyof CollectionInterface)
                                                }
                                            >
                                                <img src={"/assets/Icon/SortZtoA.svg"} alt="sort z to a"/>
                                                {sortConfig?.field === key &&
                                                    sortConfig.direction === SortDirection.DESC && (
                                                        <img src={"/assets/Icon/SortActive.svg"} alt="sort z to a"/>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </th>
                        ))}
                </tr>
                </thead>
                <tbody>
                {invoices.map((invoice, index) => (
                    <tr key={index} className="custom-table">
                        {showCheckbox && (
                            <td>
                                <input
                                    type="checkbox"
                                    checked={invoice.checked}
                                    onChange={() => handleCheckboxChange(index)}
                                />
                            </td>
                        )}
                        {Object.keys(invoice)
                            .slice(0, -1)
                            .map((key, cellIndex) => (
                                <td key={cellIndex}>
                                    {cellIndex === 0 ? (
                                        <Link
                                            className="text-black text-decoration-none"
                                            to={`/dashboard/invoices/details`}
                                        >
                                            {invoice[key as keyof typeof invoice]}
                                        </Link>
                                    ) : cellIndex !== Object.keys(invoice).length - 1 ? (
                                        <>{invoice[key as keyof typeof invoice]}</>
                                    ) : null}
                                </td>
                            ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default InvoiceTable;
