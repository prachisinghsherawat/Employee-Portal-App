import { Route , Routes } from "react-router-dom"
import { Login } from "../Pages/Login/Login"
import { Register } from "../Pages/Register/Register"


export const AllRoutes = () => {

    return(

        <>

        <Routes>

            {/* <Route path="/" element={} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

        </Routes>
        
        </>

    )
}