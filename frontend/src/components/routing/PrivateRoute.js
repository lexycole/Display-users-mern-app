import React, { useContext } from "react";
import { Redirect, Outlet } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

function PrivateRoute() {
	const authContext = useContext(AuthContext);
	const { isAuthenticated, loading } = authContext;
	return !isAuthenticated && !loading ? <Redirect to="/login" /> : <Outlet />;
}

export default PrivateRoute;
