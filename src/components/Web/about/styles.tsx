import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6rem;
`;

export const Informations = styled.div`
    text-align: right;
    padding-right: 4rem;
        & label{
            font-size: 1.5rem;
            color: grey;
        }
        h1{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 4rem;
            font-weight: 100;
            color: var(--backgroundSecond);
        }
        h2{
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            font-weight: bold;
            font-size: 3rem;
            color: var(--title);
        }
        p{
            color: var(--title);
        }


`;

export const ProfileImage = styled.div`
    padding-left: 4rem;

    & img{
        width: 20rem;
        height: 32rem;
        border-radius: 10px;
    }
`;