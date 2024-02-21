import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CollectionInterface,
  CompletedInterface,
  DeliveryInterface,
  SortDirection,
} from "@components/custom/InvoiceTable";

interface CollectionsProps {
  initialData: CollectionInterface | CompletedInterface | DeliveryInterface;
}

const InVoicesCard: React.FC<CollectionsProps> = ({ initialData }) => {
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

  const [isChecked, setIsChecked] = useState(checked);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
        <div className="d-flex justify-content-between align-items-s gap-3">
          <div className="d-flex flex-column justify-content-between gap-2">
            <div className="d-flex justify-content-start gap-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id={`checkbox`}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  className="custom-control-label"
                  htmlFor={`checkbox`}
                ></label>
              </div>
              <b className="custom-control-label">{invoiceNo}</b>
            </div>
            <p className="text-color">{buyer}</p>
          </div>
          <div className="d-flex flex-column justify-content-between gap-2">
            <Link
              className="text-12"
              style={{ color: "#0080FC" }}
              to={"/dashboard/invoices/details"}
            >
              View details
            </Link>
            <p className="text-12">{amount}</p>
          </div>
        </div>
        <hr className={isChecked ? "border-primary" : "border-dark"} />
        <div className="d-flex justify-content-start">
          <div className="w-100  border-end">
            <p className="text-gray text-center">Company</p>
            <p className="text-center fw-bold text-black">{company}</p>
          </div>
          {due && (
            <div className="w-100 border-end">
              <p className="text-gray text-center">Due</p>
              <p className="text-center fw-bold text-black">{due}</p>
            </div>
          )}
          <div
            // className="w-100 border-end"

            className={due ? "w-100 border-end" : "w-100"}
          >
            <p className="text-gray text-center">Date</p>
            <p className="text-center fw-bold text-black">{date}</p>
          </div>
          {overdueBy && (
            <div className="w-100">
              <p className="text-gray text-center">Overdue By</p>
              <p className="text-center fw-bold text-black">{overdueBy}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InVoicesCard;
