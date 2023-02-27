import styled from "styled-components";

export const Navbar = styled.div`
    height: 7.3rem;
    background-color: var(--backgroundFirst);
    box-shadow: -4px 1px 16px 0px rgba(0, 0, 0, 0.245);
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const NavbarLinks = styled.ul`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: var(--title);
    font-weight: 500;
`;

export const Icon = styled.div`
    display: flex;
    & svg{
        margin-right: 1rem;
        color: var(--title);
    }
`;

export const Services = styled.li`
    padding: 0 2rem;
    > ul {
    display: none;
    position: absolute;
    z-index: 2;
    width: 250px;
    height: auto;
    background-color: #f9f9f9;
    border-radius: 5px;
    padding: .5rem;
    box-shadow: 1px 6px 16px 0px rgb(0 0 0 / 25%);
  }

  > ul > li {
    width: 100%;
    height: 100%;
    padding: .5rem;
    margin-bottom: .5rem;
    font-weight: 100;
  }

  &:hover > ul {
    display: block;

    & li > a:hover {
        font-weight: 600;
        transition: all ease-in-out;
    }
  }
  &:hover a > svg{
    transform: rotate(180deg);
    transition: transform 0.3s ease-in-out;
  }
`;

export const Method = styled.li`
    padding: 0 2rem;
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

export const Logo = styled.li` 
    margin-bottom: 1em;
    & img{
        width: 9rem;
        height: 9rem;
    }
`;

export const About = styled.div`
    padding: 0 2rem;
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

export const Contact = styled.div`
    padding: 0 2rem;
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

export const Button = styled.button`
    padding: 1rem 3rem;
    border: solid 1px var(--title);
    background-image: linear-gradient(to right, var(--backgroundSecond) , rgba(187, 227, 205, 0.1));
    border-radius: 2rem;
    color: var(--title);
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 1px -1px 10px 4px var(--backgroundSecond);
        background: radial-gradient(circle at top left, transparent 10%, #fff 10%);
        background-size: 200% 200%;
        background-position: top right;
        transition: all 0.3s ease-in-out;
    }
    `;