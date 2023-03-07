import styled from "styled-components";

export const SpecialitiesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    padding-bottom: 10rem;
    & h1{
        font-weight: 100;
        padding: 3rem;
        color: var(--title);
    }
`;

export const TwoCards = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2rem;
`;

export const OneCard = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const Card = styled.div`
    height: 20rem;
    width: 32rem;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0rem 2rem;
        &  h2{
           font-size: 1.5rem;
           padding: .5rem;
           font-weight: 400;
           color: var(--title);
        }
        & div:hover{
            background-size: 110%;
        }
        .cardImage{
            width: 25rem;
            height: 10rem;
            opacity: .9;
            background-size: cover;
            background-size: 100%;
            transition: background-size 0.5s ease;
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
`;

export const CardFull = styled.div`
    width: 60rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & div{
        width: 60rem;
        height: 10rem;
        background-image: url('https://magscan.com.br/wp-content/uploads/2020/07/intolerancia-e-alergias-alimentares-como-identificar-capa.png');
        background-position: center;
        background-size: cover;
        transition: transform .2s;
        background-size: 100%;
        transition: background-size 0.5s ease;
    }
    h2{
        font-size: 1.5rem;
        padding: .5rem;
        font-weight: 400;
        color: var(--title);
    }
    & div:hover{
        background-size: 110%;
    }
`;