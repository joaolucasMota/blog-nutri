import styled from "styled-components";

export const Container = styled.div`
    background-color: var(--backgroundSecond);
    text-align: center;
    & h1{
        padding: 2rem;
        opacity: .9;
        font-weight: 200;
        font-size: 4rem;
    }
    img{
        width: 20rem;
        height: 20rem;
        border-bottom-right-radius: 50%;
        border-top-left-radius: 50%;
    }
    p{
        padding: 1rem;
    }
    button {
        padding: 1rem 3rem;
        border-radius: 1.5rem;
        background-color: var(--title);
        border: none;
        color: #ffffff;
        font-weight: 500;
        transition: all ease-in .3s;
        margin-bottom: 3rem;
    }
    button:hover {
        background: linear-gradient(to right, #ff000041 0%, #ff80003e 16.6%,  #0000ff3f 66.6%, #8000ff41 83.3%, #ff00ff35 100%);
        color: black;
    }
`;