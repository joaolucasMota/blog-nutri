import { isMobile } from "react-device-detect";

import { MobileHome } from "../components/Mobile/mobileHome/mobileHome";
import { MobileAbout } from "../components/Mobile/mobileAbout/mobileAbout";
import { MobileSpecialities } from "../components/Mobile/mobileSpecialities/mobileSpecialities";
import { MobileMethod } from "../components/Mobile/mobileMethod/mobileMethod";
import { MobileOnlineService } from "../components/Mobile/mobileOnlineService/mobileOnlineService";
import { MobileIcons } from "../components/Mobile/mobileIcons/mobileIcons";
import { MobileFooter } from "../components/Mobile/mobileFooter/mobileFooter";


import { Home } from "../components/Web/home/Home";
import { About } from "../components/Web/about/About";
import { Specialities } from "../components/Web/specialities/Specialities";
import { Method } from "../components/Web/method/Method";
import { OnlineService } from "../components/Web/onlineService/OnlineService";
import { QueryIcons } from "../components/Web/queryIcons/QueryIcons";
import { Footer } from "../components/Web/footer/Footer";





export default function Main(){
    return(
        <>
        {isMobile ? 
        (<>
            <MobileHome/>
            <MobileAbout/>
            <MobileSpecialities/>
            <MobileMethod/>
            <MobileOnlineService/>
            <MobileIcons/>
            <MobileFooter/>
        </>) 
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