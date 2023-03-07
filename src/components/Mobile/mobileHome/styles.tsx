import styled from "styled-components";

export const SuperHomeContainer = styled.div`
        width: 100%;
        background-image: url('https://64.media.tumblr.com/d8b3ce6643654c58c2b4c1e19afa7c01/3d1c0c126410384d-bf/s500x750/ebed0d00714a7788517c735b69cb675880f1a8f0.pnj');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
`;

export const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 30rem;
    padding-top: 10rem;
    opacity: .9;
    & h2{
        z-index: 1;
        font-weight: bold;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 2rem;
        color: rgb(0,0,0, .7);
    }
    label{
        color: grey;
        padding-bottom: 2rem;
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