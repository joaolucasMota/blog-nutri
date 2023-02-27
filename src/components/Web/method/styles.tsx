import styled from "styled-components";

export const MethodContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--backgroundSecond);
    height: 40rem;
    padding-bottom: 4rem;
`;

export const Image = styled.img`
    width: 25%;
    margin-top: -4rem;
    box-shadow: -2px 1px 20px 3px rgba(0, 0, 0, 0.407);
`;

export const Text = styled.div`
    width: 25%;
    background-color: #f3f3f5;
    margin-top: -4rem;
    box-shadow: -2px 1px 20px 3px rgba(0, 0, 0, 0.407);
    & h1{
        text-align: center;
        color: var(--title);
        padding: 1rem;
    }
    p{
        text-align: left;
        padding: 2rem;
        margin-top: -2rem;
    }
`;