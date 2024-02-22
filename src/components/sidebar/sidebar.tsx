import React from "react";
import "./sidebar.scss";
import {NavLink, useLocation} from "react-router-dom";

interface SidebarProps {
    setIsShow: Function;
}

const menus = [
    {
        name: "Invoices",
        icon: (active: boolean) => {
            return active
                ? "/assets/Icon/Invoices-white.svg"
                : "/assets/Icon/Invoices.svg";
        },
        withDropdown: false,
        link: "/dashboard/invoices",
    },
    {
        name: "Batches",
        icon: (active: boolean) => {
            return active
                ? "/assets/Icon/Batches-white.svg"
                : "/assets/Icon/Batches.svg";
        },
        withDropdown: false,
        link: "/dashboard/batches",
    },
    {
        name: "Payments",
        icon: (active: boolean) => {
            return active
                ? "/assets/Icon/Payments-white.svg"
                : "/assets/Icon/Payments.svg";
        },
        withDropdown: false,
        link: "/dashboard/payments",
    },
    {
        name: "Employees",
        icon: (active: boolean) => {
            return active
                ? "/assets/Icon/Employees-white.svg"
                : "/assets/Icon/Employees.svg";
        },
        withDropdown: true,
        link: "/dashboard/employees",
    },
    {
        name: "Vehicles",
        icon: (active: boolean) => {
            return active
                ? "/assets/Icon/Vehicles-white.svg"
                : "/assets/Icon/Vehicles.svg";
        },
        withDropdown: false,
        link: "/dashboard/vehicles",
    },
];
const Sidebar: React.FC<SidebarProps> = ({setIsShow}) => {
    const location = useLocation();
    return (
        <>
            <div
                className="d-flex flex-column sidebar border border-top-0 border-start-0 menu-container flex-shrink-0 p-4
d-none d-md-block

                "
                style={{width: "300px"}}
            >
                <ul className="nav nav-pills flex-column mb-auto">
                    {menus.map((menu, index) => (
                        <li key={index} className="nav-item">
                            <NavLink
                                className="nav-link d-flex sidebar-link fw-bold justify-content-between"
                                to={menu.link}
                            >
                                <div
                                    className={"d-flex gap-3"}
                                >
                                    <img
                                        src={menu.icon(location.pathname.startsWith(menu.link))}
                                        alt={menu.name}
                                    />
                                    <span>{menu.name}</span>
                                </div>
                                {
                                    menu?.withDropdown && (
                                        <img src="/assets/Icon/ArrowDropDown.svg" alt="drop"/>
                                    )
                                }
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            {!location.pathname.includes("details") && (
                <div
                    className="search-bar d-md-none d-flex px-4 pt-4"
                    style={{width: "100%"}}
                >
                    <div className="search-bar-input w-100">
                        <img
                            src={"/assets/image/textalign-left.svg"}
                            onClick={() => setIsShow(true)}
                            alt="User Avatar"
                        />
                        <input
                            style={{height: "50px"}}
                            className="w-100 bg-gray"
                            type="text"
                            placeholder="Search By Name or Invoice Number"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Sidebar;
