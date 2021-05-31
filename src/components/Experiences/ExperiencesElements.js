import styled from "styled-components";

export const Container = styled.div`
  height: 950px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #eeeeee;

  @media screen and (max-width: 1000px) {
    height: 1200px;
  }

  @media screen and (max-width: 768px) {
    height: 1700px;
  }

  @media screen and (max-width: 500px) {
    height: 4000px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  /* padding: 0 50px; */

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  /* -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover; */
  /* flex-direction: column; */
  /* align-items: center; */
  background-image: url(${({ imageCard }) => imageCard});
  background-size: cover;
  overflow: hidden;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  max-height: 340px;
  padding: 10rem 0 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  width: 230px;
  height: 230px;
  text-align: center;
  transition: transform 500ms ease;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    /* filter:brightness(0.8); */
  }

  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;

export const H1 = styled.h1`
  font-size: 2.5rem;
  color: #484a46;
  margin-bottom: 64px;
  padding: 0px 20px 0px 20px ;
  text-align: center; 

  @media screen and (max-width: 768px) {
    padding: 0px 50px  ;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const TopLine = styled.p`
  color: #fc0071;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


export const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #fff;
  transition: 300ms ease;
  transform: translateX(0);
  text-shadow: 1px 1px #000;

  
  &:hover {
    padding-bottom: 10px;
    border-bottom: 3px solid #fc0071;
    transform: translateX(5%);
  }
`

export const P = styled.p`
  font-size: 1rem;
  text-align: center;
`;

