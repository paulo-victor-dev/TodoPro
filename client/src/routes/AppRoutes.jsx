import { BrowserRouter, Routes, Route } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PageNotFound from "../pages/PageNotFound";

export default function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>
                    }/>
                    
                    <Route path="/login" element={ <Login /> }/>
                    <Route path="/register" element={ <Register /> }/>
                    <Route path="*" element={ <PageNotFound /> }/>
                </Routes>
            </BrowserRouter>
        </>
    );
}