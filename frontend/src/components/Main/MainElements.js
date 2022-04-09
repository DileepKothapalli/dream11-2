import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  width: 90vw;
  min-width: 900px;
  background-color: rgba(255, 67, 14, 0.12);
  background-color: #109e38;
  background-color: #111;
  border-radius: 10px;
  flex-direction: column;
  margin: 20px 0px;
`;
export const TopContainer = styled.div`
  display: flex;
  height: 150px;
  align-items: center;
  justify-content: space-between;
`;
export const Details = styled.div`
  display: flex;
  color: white;
  margin: 10px 30px;
  min-height: 100px;
  flex-direction: column;
  align-items: ${(props) => props.l};
  justify-content: center;
`;
export const Team = styled.h1`
  color: #ddd;
  margin: 0px;
  font-family: "Playfair Display", serif;
`;

export const Score = styled.h1`
  margin: 0px;
  font-size: 24px;
  font-family: "Poppins", sans-serif;
  color: #aaa;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
  height: 60px;
  padding: 0px 20px;
  background-color: rgba(162, 162, 162, 0.08);
  background-color: white;
  margin: 30px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  min-width: 800px;
`;

export const Card = styled.div`
  background-color: rgba(100, 100, 100, 1);
  background-color: #c4c4c4;
  display: flex;
  height: 40px;
  background-color: #000;
//   background-color: #000;
  text-align-center;
  min-width: 40px;
  max-width:40px;
  border-radius: 5px;
  color: #e10000;
  color: #109e38;
  color: #fff;
justify-content:center;
align-items:center;
font-family: "Poppins", sans-serif;

  `;

export const Info = styled.h1`
  font-size: 20px;
`;
