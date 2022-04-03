import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // font-family: "Poppins", sans-serif;
  font-family: "Playfair Display", serif;
  font-weight: 600;
`;
export const TopContainer = styled.div`
  display: flex;
  width: 80vw;
  align-items: center;
  margin-top: 40px;
  justify-content: space-evenly;
`;
export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
`;
export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #aaa;
  min-width: 250px;
  min-height: 500px;
  border-radius: 10px;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: #109e38;
  background-color: #111;
  color: #eee;
  outline: none;
  border: none;
  padding: 10px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Playfair Display", serif;
`;

export const InputDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;
export const Label = styled.h1`
  font-size: 16px;
  width: 70px;
`;

export const Input = styled.input`
  width: 50px;
  height: 25px;
`;
