import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: var(--backgroundSecond);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Contact = styled.div`
    margin-top: 1rem;
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

export const EmailContainer = styled.div`
    display: flex;
`;

export const EmailLink = styled.p`
    padding-right: 1rem;
`;

export const CopyButton = styled.div`
    & svg{
        color: green;
    }
`;

export const Top = styled.div`
    background-color: var(--backgroundSecond);
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    color: var(--title);
    font-size: 1.5rem;
`;
