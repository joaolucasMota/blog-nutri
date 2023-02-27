import { isMobile } from "react-device-detect";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Header } from '../components/Web/header/Header';
import { MobileHeader } from "../components/Mobile/mobileHeader/mobileHeader";
import Main from "../pages/Main";


export default function RoutesApp(){
    return(
        <BrowserRouter>
           {isMobile? <MobileHeader/> : <Header/>} 
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>

        </BrowserRouter>
    );
}