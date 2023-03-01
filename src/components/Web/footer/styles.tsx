import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: var(--backgroundSecond);
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const Contact = styled.div`
    padding: 10rem;
    & h5{
        font-size: 2rem;
        color: var(--title);
    }
    p {
        font-size: 1.2rem;
    }
`;

export const Button = styled.div`
    padding: 5rem;
    & button{
        color: #ffffff;
        padding: 1rem 2rem;
        border-radius: 1rem;
        background-color: var(--title);
        border: none;
    }
`;

export const Icon = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    color: var(--title);
`;