import { isMobile } from "react-device-detect";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import { Header } from '../components/Web/header/Header';
import { MobileHeader } from "../components/Mobile/mobileHeader/mobileHeader";
import Main from "../pages/Main";

import EmagrecimentoObesidade from "../pages/EmagrecimentoObesidade";
import TranstornoAlimentar from "../pages/TranstornoAlimentar";
import NutricaoEsportiva from "../pages/NutricaoEsportiva";
import ReeducacaoAlimentar from "../pages/ReeducacaoAlimentar";
import IntoleranciaAlimentar from "../pages/IntoleranciaAlimentar";
import Metodo from "../pages/Metodo";
import Sobre from "../pages/Sobre";
import Contato from "../pages/Contato";

import MobileEmagrecimentoObesidade from "../pages/MobileEmagrecimentoObesidade";
import MobileTranstornoAlimentar from "../pages/MobileTranstornoAlimentar";
export default function RoutesApp(){
    return(
        <BrowserRouter>
           {isMobile? <MobileHeader/> : <Header/>} 
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/emagrecimento-obesidade" element={<EmagrecimentoObesidade/>}/>
                <Route path="/transtorno-alimentar" element={<TranstornoAlimentar/>}/>
                <Route path="/nutricao-esportiva" element={<NutricaoEsportiva/>}/>
                <Route path="/reeducacao-alimentar" element={<ReeducacaoAlimentar/>}/>
                <Route path="/intolerancia-alimentar" element={<IntoleranciaAlimentar/>}/>
                <Route path="/metodo" element={<Metodo/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contato" element={<Contato/>}/>

                <Route path="/m-emagrecimento-obesidade" element={<MobileEmagrecimentoObesidade/>}/>
                <Route path="/m-transtorno-alimentar" element={<MobileTranstornoAlimentar/>}/>
            </Routes>

        </BrowserRouter>
    );
}