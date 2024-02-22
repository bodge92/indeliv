import Sidebar from "@/components/sidebar/sidebar";
import Header from "@components/header/header";
import React, {useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Batches from "./batches";
import Invoice from "./invoice";

const Dashboard: React.FC = () => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const location = useLocation();

    return (
        <div>
            <Header isShow={isShow} setIsShow={setIsShow}/>
            <div className="d-flex flex-column flex-md-row">
                <Sidebar setIsShow={setIsShow}/>
                <div
                    className={
                        "flex-grow-1 bg-gray bg-gray-md p-4 " +
                        (location.pathname.includes("details") ? "p-md-0" : "")
                    }
                >
                    <Routes>
                        <Route path="" element={<Invoice setIsShow={setIsShow}/>}/>
                        <Route
                            path="invoices/*"
                            element={<Invoice setIsShow={setIsShow}/>}
                        />
                        <Route path="batches" element={<Batches/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
