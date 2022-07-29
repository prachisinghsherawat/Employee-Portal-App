import { Route, Routes } from "react-router-dom"
import { Search } from "../Search/Search"


export const AllRoutes = () => {

    return(
        
        <Routes>
            <Route path="/search" element={<Search />} />
        </Routes>
    )
}