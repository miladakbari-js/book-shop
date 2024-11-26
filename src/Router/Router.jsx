import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Auth from "../components/template/Auth"
import Admin from "../pages/Admin"
import PageNotFound from "../pages/404"
import DashboardPage from "../pages/DashboardPage"
import Login from "../components/module/Login"
import Register from "../components/module/Register"


function Router() {
  return (
    <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
  )
}

export default Router