import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
`;

export const Image = styled.div`
  & img{
    width: 15rem;
    height: 15rem;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }
`;

export const Infos = styled.p`
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: column;
  & label{
        margin-top: 1rem;
        margin-bottom: -1rem;
        opacity: .8;
        color: var(--title);
        font-size: 3rem;
        color: grey;
    }
    h1 {
        color: var(--title);
        font-size: 3rem;
        font-weight: bold;
    }
    h2 {
      font-size: 3rem;
      color: var(--title);
      font-weight: bold;
      margin-top: -1rem;
    }
    p {
        padding: 2rem;
        margin-top: -4rem;
        opacity: .9;
    }
`;

export const Button = styled.button`
  padding: 1rem 4rem;
  border: solid 1px var(--title);
  background-image: linear-gradient(to right, var(--backgroundSecond) , rgba(187, 227, 205, 0.1));
  border-radius: 2rem;
  color: var(--title);
  transition: all 0.3s ease-in-out;
  z-index: 1;
  &:hover{
    box-shadow: 1px -1px 10px 4px var(--backgroundSecond);
    background: radial-gradient(circle at top left, transparent 10%, #fff 10%);
    background-size: 200% 200%;
    background-position: top right;
    transition: all 0.3s ease-in-out;
  }
    `;