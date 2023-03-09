import styled from "styled-components";

interface NavbarMenuProps {
    isOpen: boolean;
  }
  

export const Navbar = styled.nav`
  background-color: var(--backgroundFirst);
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: -4px 1px 16px 0px rgba(0, 0, 0, 0.245);
  z-index: 999;
  position: fixed;
  width: 100%;
  margin-top: -.1rem;
`;

export const Icon = styled.div`
    & svg{
        color: var(--title);
    }
`;

export const Logo = styled.div`
  & img{
    width: 7.5rem;
    height: 7.5rem;
    padding-bottom: 1rem;
  }
`;

export const MenuIcon = styled.button`
  background: transparent;
  border: none;
  color: var(--title);
  font-size: 2rem;
  cursor: pointer;
`;

export const NavbarMenuContainer = styled.div<NavbarMenuProps>`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  position: fixed;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  background-color: var(--backgroundFirst);
  z-index: 2;
  padding-top: 7rem;
  overflow-y: auto;
  padding-bottom: 3rem;
`;

export const NavbarMenu = styled.ul`
  background-color: var(--backgrondFirst);
  z-index: 10;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
  padding-top: 2rem;
`;

export const NavbarMenuItem = styled.li`
  margin: 10px;
  color: var(--title);
  font-size: 1.3rem;
  & a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: var(--title);
    }
    a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: var(--title);
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    }

    a:hover::after {
    transform: scaleX(1);
    }

`;

export const Services = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
    color: var(--title);
    font-size: 1.3rem;
    > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: .5rem;
    color: var(--title);
  }
  > ul > li {
    margin: 10px;
  }
  & a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: var(--title);
    }

    a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: var(--title);
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
    }

    a:hover::after {
    transform: scaleX(1);
    }
`;

export const Informations = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  color: grey;
  text-align: center;
  margin-bottom: 1rem;
`;

export const Button = styled.button`
  padding: 1rem 3.5rem;
  border: solid 1px var(--title);
  background-image: linear-gradient(to right, var(--backgroundSecond) , rgba(187, 227, 205, 0.1));
  border-radius: 2rem;
  color: var(--title);
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  &:hover{
    box-shadow: 1px -1px 10px 4px var(--backgroundSecond);
    background: radial-gradient(circle at top left, transparent 10%, #fff 10%);
    background-size: 200% 200%;
    background-position: top right;
    transition: all 0.3s ease-in-out;
  }
    `;