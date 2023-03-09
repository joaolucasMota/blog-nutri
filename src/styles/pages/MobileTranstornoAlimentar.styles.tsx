import styled from "styled-components";

export const Container = styled.div`
`;

export const Title = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &::after{
        color: red;
        margin-top: 10rem;
        background-image: url('https://images.pexels.com/photos/1414134/pexels-photo-1414134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        background-position: center;
        position: absolute;
        content: "";
        opacity: .2;
        z-index: -1;
        width: 100%;
        height: 15rem;  
    }
    label {
        padding-top: 12rem;
        font-weight: bold;
        opacity: .8;
        color: var(--title);
        font-size: 1rem;
    }
    h1 {
        opacity: .8;
        font-size: 1.7rem;
    }
`;

export const InfoAndImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 5rem;
    padding: 2rem;
`;

export const Info = styled.div`
    text-align: center;
    & label{
        font-weight: bold;
        opacity: .8;
        color: var(--title);
        font-size: 1rem;
    }
    h1 {
        opacity: .8;
        font-size: 2rem;
    }
    p {
        width: 100%;
    }
    button {
        padding: 1rem 3rem;
        border-radius: 1.5rem;
        background-color: var(--title);
        border: none;
        color: #ffffff;
        font-weight: 500;
        transition: all ease-in .3s;
        margin-bottom: 2rem;
    }
    button:hover {
        background: linear-gradient(to right, #ff000041 0%, #ff80003e 16.6%,  #0000ff3f 66.6%, #8000ff41 83.3%, #ff00ff35 100%);
        color: black;
    }
`;

export const Img = styled.div`
    display: flex;
    margin-bottom: 20rem;
    & div {
        box-shadow: 1px -1px 10px 4px rgba(0, 0, 0, 0.213);
    }
    img{
    width: 100%;
    height: auto;
    }
`;

export const SVG = styled.div`
    width: 100%;
    bottom: 0;
    pointer-events: none;
    margin-top: -20rem;
`;