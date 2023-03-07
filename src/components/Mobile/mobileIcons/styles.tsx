import styled from "styled-components";

export const QueryIconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & h1{
        text-align: center;
        padding: 2rem;
        color: var(--title);
        font-weight: 100;
        font-size: 3rem;
    }
`;
export const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Email = styled.div`
    padding: 1rem 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--title);
    font-weight: 400;
    margin-bottom: 3rem;
    & h3{
        font-weight: 400;
    }
    
`;

export const WhatsApp = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: var(--title);
    font-weight: 400;
    & h3{
        font-weight: 400;
    }
`;

export const SVG = styled.div`
    width: 100%;
    bottom: 0;
    pointer-events: none;
`;