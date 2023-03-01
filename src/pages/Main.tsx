import { isMobile } from "react-device-detect";

import { MobileHome } from "../components/Mobile/mobileHome/mobileHome";


import { Home } from "../components/Web/home/Home";
import { About } from "../components/Web/about/About";
import { Specialities } from "../components/Web/specialties/Specialities";
import { Method } from "../components/Web/method/Method";
import { OnlineService } from "../components/Web/onlineService/OnlineService";
import { QueryIcons } from "../components/Web/queryIcons/QueryIcons";
import { Footer } from "../components/Web/footer/Footer";

export default function Main(){
    return(
        <>
        {isMobile ? 
        (<MobileHome/>) 
        : 
        (<>
            <Home/>
            <About/>
            <Specialities/>
            <Method/>
            <OnlineService/>
            <QueryIcons/>
            <Footer/>
        </>)
        }        
        </>
    )
}