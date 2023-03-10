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
import MobileNutricaoEsportiva from "../pages/MobileNutricaoEsportiva";
import MobileReeducacaoAlimentar from "../pages/MobileReeducacaoAlimentar";
import MobileIntoleranciaAlimentar from "../pages/MobileIntoleranciaAlimentar";
import MobileMetodo from "../pages/MobileMetodo";
import MobileSobre from "../pages/MobileSobre";
import MobileContato from "../pages/MobileContato";


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
                <Route path="/m-nutricao-esportiva" element={<MobileNutricaoEsportiva/>}/>
                <Route path="/m-reeducacao-alimentar" element={<MobileReeducacaoAlimentar/>}/>
                <Route path="/m-intolerancia-alimentar" element={<MobileIntoleranciaAlimentar/>}/>
                <Route path="/m-sobre" element={<MobileSobre/>}/>
                <Route path="/m-metodo" element={<MobileMetodo/>}/>
                <Route path="/m-contato" element={<MobileContato/>}/>
            </Routes>

        </BrowserRouter>
    );
}