import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {BsFillTelephoneFill} from "react-icons/bs"
import LogoNav from "../../../assets/logoj.png"
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
            <img src={LogoNav} alt="Logo" />
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
              <li><a href="#">Emagrecimento & obesidade</a></li>
              <li><a href="#">Nutrição & estética</a></li>
              <li><a href="#">Nutrição esportiva</a></li>
              <li><a href="#">Redução alimentar</a></li>
              <li><a href="#">Intolerancia alimentar</a></li>
          </ul>
            ):(null)}
            
        </Services>
          <NavbarMenuItem>
            <a href="#">Método</a>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <a href="#">Serviços</a>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <a href="#">Contato</a>
          </NavbarMenuItem>
        </NavbarMenu>
          <Informations>
                <p>(00)00000-0000</p>
                <p>Email@gmail.com</p>
          </Informations>
          <Button>
                Agende sua consulta 
          </Button>
      </NavbarMenuContainer>
    </>
    )
}