import InVoicesCardPayment from "@/components/custom/InvoiceCardPayment";
import InVoicesCardProduct from "@/components/custom/InvoiceCardProduct";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export type Payment = {
    date: string;
    id: string;
    associate: string;
    paymentMethod: string;
    amount: string;
};

export type Product = {
    item: string;
    qty: number;
    price: string;
};

const payments: Payment[] = [
    {
        date: "20 Jan, 2023",
        id: "DD235",
        associate: "Vijay Kumar",
        paymentMethod: "Cash",
        amount: "₹8,729.00",
    },
    {
        date: "20 Jan, 2023",
        id: "DD265",
        associate: "Kiran",
        paymentMethod: "Cash",
        amount: "₹8,729.00",
    },
];

const products: Product[] = [
    {
        item: "Chk Butterchk250",
        qty: 5,
        price: "₹8,729.00",
    },
    {
        item: "Chk Butterchk250",
        qty: 6,
        price: "₹8,729.00",
    },
];
const Details: React.FC = () => {
    return (
        <div className={'m-3 m-md-0'}>
            <div className="d-flex flex-column flex-md-row justify-content-between w-auto align-items-center mb-4 pt-4">
                <div className="d-flex align-items-center g-6 w-md-100 justify-content-between pb-2">
                    <div className="d-flex align-items-center g-6">
                        <NavLink to={"/dashboard/invoices/completed"}>
                            <img src={"/assets/Icon/Back.svg"} alt="Back"/>
                        </NavLink>
                        <span className="fw-bold text-12">N27362</span> -
                        <span className="text-primary text-16 text-12 fw-bolder">
              Ashok Anil Antreprise(LLP)
            </span>
                    </div>
                    <span className="d-md-none">
            <img src={"/assets/Icon/more.svg"} alt="Back"/>
          </span>
                </div>
                <div className="g-16 d-flex w-md-100 justify-content-between">
                    <div className="card py-2 px-4 d-flex justify-content-between align-items-center">
                        <span className="text-14 text-gray text-12">Total Amount</span>
                        <p className="m-0 fw-bold text-primary text-12">₹8,729.00</p>
                    </div>
                    <div className="card py-2 px-4 d-flex justify-content-between align-items-center">
                        <span className="text-14 text-gray text-12">Payments</span>
                        <p className="m-0 fw-bold text-12">₹8,729.00</p>
                    </div>
                    <div className="card py-2 px-4 d-flex justify-content-between align-items-center">
                        <span className="text-14 text-gray text-12">Balance Due</span>
                        <p className="m-0 fw-bold text-12">₹8,729.00</p>
                    </div>
                </div>
            </div>
            <div className="d-flex flex-column flex-md-row g-16">
                <div className="w-75 w-md-100">
                    <div className="shadowed mb-2">
                        <div className="navbar p-2 bg-header fw-bold">Payment received</div>
                        <div className="p-2">
                            <div
                                className="d-xs-none d-none d-md-block"
                            >
                                <table className="table-stripe-rounded">
                                    <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>ID#</th>
                                        <th>Associate</th>
                                        <th>Payment Method</th>
                                        <th>Amount</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {payments.map((p, index) => (
                                        <tr key={index}>
                                            <td>{p.date}</td>
                                            <td>{p.id}</td>
                                            <td>{p.associate}</td>
                                            <td>{p.paymentMethod}</td>
                                            <td>{p.amount}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div
                                className="d-xs-block mt-4 d-block d-md-none"
                            >
                                {payments.map((data, index) => (
                                    <InVoicesCardPayment
                                        key={index}
                                        initialData={data}

                                    />
                                ))
                                }
                            </div>
                        </div>

                        <div className="shadowed shadowed">
                            <div className="navbar p-2 bg-header fw-bold">
                                Product, Quantity & Price
                            </div>
                            <div className="p-2">
                                <div
                                    className="d-xs-none d-none d-md-block"
                                >
                                    <table className="table-stripe-rounded">
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Item</th>
                                            <th>Qty</th>
                                            <th>Price</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {products.map((p, index) => (
                                            <tr key={index}>
                                                <td>0{index + 1}</td>
                                                <td>{p.item}</td>
                                                <td>{p.qty}</td>
                                                <td>{p.price}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div
                                    className="d-xs-block mt-4 d-block d-md-none"
                                >
                                    {products.map((data, index) => (
                                        <InVoicesCardProduct
                                            key={index}
                                            initialData={data}
                                            index={index}

                                        />
                                    ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-25 w-md-100">
                    <div className="shadowed mb-2">
                        <div className="navbar p-2 bg-header fw-bold">Details</div>
                        <div className="d-flex justify-content-between align-items-center p-2 border-bottom-gray">
                            <div className="d-flex g-6 align-items-center">
                                <img src={"/assets/Icon/Date.svg"} alt="User Avatar"/>
                                <span className="text-details">Date</span>
                            </div>
                            <span className="text-details-value">20 Jan, 2024</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-2 border-bottom-gray">
                            <div className="d-flex g-6 align-items-center">
                                <img src={"/assets/image/calendar.svg"} alt="User Avatar"/>
                                <span className="text-details">Overdue By</span>
                            </div>
                            <span className="text-details-value">10 Days</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-2 border-bottom-gray">
                            <div className="d-flex g-6 align-items-center">
                                <img src={"/assets/Icon/Address.svg"} alt="User Avatar"/>
                                <span className="text-details">Address</span>
                            </div>
                            <span className="text-details-value">c/o Biotech</span>
                        </div>
                        <div className="d-flex justify-content-between align-items-center p-2 border-bottom-gray">
                            <div className="d-flex g-6 align-items-center">
                                <img src={"/assets/Icon/OTP Number.svg"} alt="User Avatar"/>
                                <span className="text-details">OTP Number</span>
                            </div>
                            <span className="text-details-value text-success">
                +91 7836067476
              </span>
                        </div>
                    </div>
                    <div className="shadowed mb-2">
                        <div className="navbar p-2 bg-header fw-bold">History</div>
                        <div className="d-flex g-6 align-items-center p-2">
                            <div className="container-image py-2 px-3">
                                <img src={"/assets/Icon/Tally.svg"} alt="User Avatar"/>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="text-14 text-gray">Tally to indeliv</span>
                                <span className="text-14 fw-bold">20 Jan, 2024 , 6:00am</span>
                            </div>
                        </div>
                        <div className="d-flex g-6 align-items-center p-2">
                            <div className="container-image py-2 px-3">
                                <img src={"/assets/Icon/Tally.svg"} alt="User Avatar"/>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="text-14 text-gray">Tally to indeliv</span>
                                <span className="text-14 fw-bold">20 Jan, 2024 , 6:00am</span>
                            </div>
                        </div>
                        <div className="d-flex g-6 align-items-center p-2">
                            <div className="container-image py-2 px-3">
                                <img src={"/assets/Icon/Tally.svg"} alt="User Avatar"/>
                            </div>
                            <div className="d-flex flex-column">
                                <span className="text-14 text-gray">Tally to indeliv</span>
                                <span className="text-14 fw-bold">20 Jan, 2024 , 6:00am</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
