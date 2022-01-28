import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Produtos_Page from "../Pages/Produtos";
import Novidades_Page from "../Pages/Novidades";

export function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<Home/>} path="/" />
                <Route element={<Produtos_Page/>} path="/Produtos" />
                <Route element={<Novidades_Page/>} path="/Novidades" />
            </Routes>
        </BrowserRouter>
    )
}