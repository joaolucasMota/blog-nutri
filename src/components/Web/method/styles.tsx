import styled from "styled-components";

export const MethodContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: var(--backgroundSecond);
    height: 40rem;
    padding-bottom: 4rem;
`;

export const Image = styled.img`
    width: 35%;
    margin-top: -4rem;
    box-shadow: -2px 1px 20px 3px rgba(0, 0, 0, 0.407);
`;

export const Text = styled.div`
    width: 25%;
    background-color: #f3f3f5;
    margin-top: -4rem;
    box-shadow: -2px 1px 20px 3px rgba(0, 0, 0, 0.407);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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