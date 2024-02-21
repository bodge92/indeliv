import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Forgot from "./pages/forgot";
import Reset from "./pages/reset";

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="forgot-password" element={<Forgot/>}/>
                <Route path="reset-password" element={<Reset/>}/>

                <Route
                    path="/dashboard/*"
                    element={
                        <PrivateRoute>
                            <Dashboard/>
                        </PrivateRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
