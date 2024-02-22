import {listInvoices} from "@/services/invoices";
import React, {useEffect, useState} from "react";
import "./index.scss";
import {Route, Routes, useLocation} from "react-router-dom";
import Deliveries from "@/components/invoice/deliveries";
import {NavLink} from "react-router-dom";
import Collections from "@/components/invoice/collections";
import Completed from "@/components/invoice/completed";
import Details from "@/components/invoice/details";
import {useDispatch} from "react-redux";
import {setQuery} from "@/stores/slices/searchSlice";

const tabs = [
    {
        name: "Deliveries",
        icon: (active: boolean) => {
            return active
                ? "/assets/Icon/Deliveries-blue.svg"
                : "/assets/Icon/Deliveries.svg";
        },
        link: "/dashboard/invoices/deliveries",
    },
    {
        name: "Collections",
        icon: (active: boolean) => {
            return active
                ? "/assets/Icon/Collections-blue.svg"
                : "/assets/Icon/Collections.svg";
        },
        link: "/dashboard/invoices/collections",
    },
    {
        name: "Completed",
        icon: (active: boolean) => {
            return active
                ? "/assets/Icon/Completed-blue.svg"
                : "/assets/Icon/Completed.svg";
        },
        link: "/dashboard/invoices/completed",
    },
];

interface InvoiceProps {
    setIsShow: Function;
}

const Invoice: React.FC<InvoiceProps> = ({setIsShow}) => {
    const dispatch = useDispatch();
    const handleSearch = (newQuery: string) => {
        dispatch(setQuery(newQuery));
    };
    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const lastSegment = pathSegments[pathSegments.length - 1];
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const invoices = await listInvoices();
                console.log(invoices);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="invoice shadowed shadowed-md">
            {lastSegment != "details" && (
                <div className="shadowed-md navbar">
                    <ul className="nav-links d-flex justify-content-between align-items-center w-md-100 g-0  m-0 text-12">
                        {tabs.map((tab, index) => (
                            <NavLink
                                to={tab.link}
                                key={index}
                                className={"text-decoration-none col-4"}
                            >
                                <li className={"navbar-link fw-bold p-md justify-content-center"}>
                                    <img
                                        src={tab.icon(location.pathname === tab.link)}
                                        alt={tab.name}
                                    />
                                    <span>{tab.name}</span>
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                    <div className="search-bar d-flex">
                        <div className="search-bar-input d-xs-none d-none d-md-block">
                            <img
                                onClick={() => setIsShow(true)}
                                src={"/assets/Icon/Search.svg"}
                                alt="User Avatar"
                            />
                            <input
                                type="text"
                                placeholder="Search By Name or Invoice Number"
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                        {(lastSegment === "deliveries" || lastSegment === "invoices") && (
                            <button
                                className="custom-button btn btn-primary d-xs-none d-sm-none d-md-block  w-auto  fw-bold d-flex align-items-center rounded-pill gap-6">
                                <img src={"/assets/Icon/Add.svg"} alt="User Avatar"
                                     style={{width: "16px", height: "16px"}}
                                />
                                <span>Create Batch</span>
                            </button>
                        )}
                    </div>
                </div>
            )}
            <div className="content">
                <Routes>
                    <Route path="" element={<Deliveries/>}/>
                    <Route path="deliveries" element={<Deliveries/>}/>
                    <Route path="collections" element={<Collections/>}/>
                    <Route path="completed" element={<Completed/>}/>
                    <Route path="details" element={<Details/>}/>
                </Routes>
            </div>
            <div
                className="d-flex justify-content-center align-items-center h-100 p-3"
            >
                {
                    loading && <img src="/assets/Icon/Loading.svg" alt=""
                                    className={'image_loading'}
                    />
                }
            </div>

            {/*{(lastSegment === "deliveries" || lastSegment === "invoices") && (*/}
            {/*    <div*/}
            {/*        className="fixed-bottom d-flex justify-content-center align-items-center p-3 create-batch-button-anchor "*/}
            {/*    >*/}
            {/*        <button*/}
            {/*            className="custom-button-mobile btn btn-primary w-auto w-full fw-bold d-flex align-items-center rounded-pill gap-6">*/}

            {/*            <div*/}
            {/*                className={"number-selected"}*/}
            {/*            >*/}
            {/*                <span>*/}
            {/*                    {*/}
            {/*                        1*/}
            {/*                    }*/}
            {/*                </span>*/}
            {/*            </div>*/}
            {/*            <span>Create Batch</span>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*)}*/}

        </div>
    );
};

export default Invoice;
