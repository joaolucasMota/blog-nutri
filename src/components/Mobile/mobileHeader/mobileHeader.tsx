import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {BsFillTelephoneFill} from "react-icons/bs"
import LogoNav from "../../../assets/logoj.png"
import { Link } from 'react-router-dom';
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io"
import {Navbar,
        Logo, 
        MenuIcon, 
        NavbarMenu, 
        NavbarMenuItem, 
        Icon, 
        Services, 
        Informations,
        NavbarMenuContainer,
        Button} from "./styles"

export function MobileHeader(){

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenService, setIsOpenService] = useState(false);

    function toggleNavbar() {
      setIsOpen(!isOpen);
    }

    function toggleServices() {
      setIsOpenService(!isOpenService);
    }

    return(
        <>
      <Navbar>
        <Icon>
            <BsFillTelephoneFill size={20}/>
        </Icon>
        <Logo href="#">
            <Link to='/'><img src={LogoNav} alt="Logo" /></Link>
        </Logo>
        <MenuIcon onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </MenuIcon>
      </Navbar>
      <NavbarMenuContainer isOpen={isOpen}>
        <NavbarMenu>
        <Services onClick={toggleServices}>
            <a href="#">Serviços{isOpenService ? <IoIosArrowDown/> : <IoIosArrowUp/>}</a>
            {isOpenService ? (
              <ul>
              <li onClick={toggleNavbar}><Link to="/m-emagrecimento-obesidade">Emagrecimento & obesidade</Link></li>
              <li onClick={toggleNavbar}><Link to="/m-transtorno-alimentar">Transtorno alimentar</Link></li>
              <li onClick={toggleNavbar}><a href="#">Nutrição esportiva</a></li>
              <li onClick={toggleNavbar}><a href="#">Reeducação alimentar</a></li>
              <li onClick={toggleNavbar}><a href="#">Intolerância ou alergia alimentar</a></li>
          </ul>
            ):(null)}
            
        </Services>
          <NavbarMenuItem>
            <a href="#">Método</a>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <a href="#">Sobre</a>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <a href="#">Contato</a>
          </NavbarMenuItem>
        </NavbarMenu>
          <Informations>
                <p>(11) 91362‑9808</p>
                <p>emilycadetes@gmail.com</p>
          </Informations>
          <Link target="_blank" to= "https://wa.me/5511913629808?text=Ol%C3%A1!%20Tenho%20interesse%20na%20consulta">
            <Button>
                  Agende sua consulta
            </Button>
          </Link>
      </NavbarMenuContainer>
    </>
    )
}