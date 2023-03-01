import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-image: url('https://i.imgur.com/Nke6bso.png');
    background-size: cover;
    background-position: right;
    background-attachment: fixed;
`;

export const ContainerInfoAndPhoto = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    width: 100%;
    padding: 10rem;
    margin-bottom: -25rem;
    margin-top: 2rem;
`;

export const Informations = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & h2{
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 2rem;
        color: rgb(0,0,0, .7);
    }
    label{
        color: grey;
        padding-bottom: 1rem;
        font-size: large;
    }
    p{
        font-size: 2rem;
        color: grey;
        z-index: 1;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-bottom: -.2rem;
    }
    h4{
        color: grey;
        padding: 1rem;
    }
`;

export const ProfileImage = styled.div`
    & img{
        width: 23rem;
        height: 23rem;
        border-radius: 50%;
    }
`;

export const Button = styled.button`
  padding: 1rem 4rem;
  border: solid 1px var(--title);
  background-image: linear-gradient(to right, var(--backgroundSecond) , rgba(187, 227, 205, 0.1));
  border-radius: 2rem;
  color: var(--title);
  transition: all 0.3s ease-in-out;
  margin-top: 3rem;
  z-index: 1;
  &:hover{
    box-shadow: 1px -1px 10px 4px var(--backgroundSecond);
    background: radial-gradient(circle at top left, transparent 10%, #fff 10%);
    background-size: 200% 200%;
    background-position: top right;
    transition: all 0.3s ease-in-out;
  }
    `;


export const SVG = styled.div`
    width: 100%;
    bottom: 0;
    pointer-events: none;
`;