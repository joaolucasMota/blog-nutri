import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 6rem;
    & h1{
        opacity: .9;
        font-weight: 200;
        font-size: 2rem;
        margin-bottom: 3rem;
    }
`;

export const Card = styled.div`
    height: 30rem;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0rem 2rem;
    margin-bottom: 4rem;
    &  h2{
           font-size: 1.5rem;
           padding: .5rem;
           font-weight: 400;
           color: var(--title);
        }
        p{
            width: 80%;
        }
        div:hover{
            background-size: 140%;
        }
        .cardImage{
            width: 80%;
            height: 16rem;
            opacity: .9;
            background-size: cover;
            background-size: 130%;
            transition: background-size 0.5s ease;
            border-top-right-radius: 50%;
            border-bottom-left-radius: 50%;
        }
        #card1{
            background-image: url('https://images.pexels.com/photos/5714347/pexels-photo-5714347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
            background-position: center;
        }
        #card2{
            background-image: url('https://images.pexels.com/photos/6975474/pexels-photo-6975474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
            background-position: center;
        }
        #card3{
            background-image: url('https://images.pexels.com/photos/4397841/pexels-photo-4397841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
            background-position: center;
        }
        #card4{
            background-image: url('https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
            background-position: center;
        }
        #card5{
            background-image: url('https://magscan.com.br/wp-content/uploads/2020/07/intolerancia-e-alergias-alimentares-como-identificar-capa.png');
            background-position: center;
        }
`;