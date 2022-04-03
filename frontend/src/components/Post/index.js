import React from "react";
import Axios from "axios";
import Navbar from "../Navbar";
import {
  BottomContainer,
  Button,
  Container,
  Input,
  InputDiv,
  Label,
  PostContainer,
  TopContainer,
} from "./PostElements";

const index = () => {
  const submitHandler = () => {
    console.log("this is ");
    Axios.post("http://localhost:8080/insert", {
      first: "12",
      second: "23",
      third: "34",
    });
  };

  return (
    <div>
      <Navbar />

      <Container>
        <TopContainer>
          <PostContainer>
            <InputDiv>
              <Label>First</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Second</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Third</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Fourth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Fifth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Sixth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Seventh</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Eighth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Ninth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Tenth</Label>
              <Input></Input>
            </InputDiv>
            <InputDiv>
              <Label>Eleventh</Label>
              <Input></Input>
            </InputDiv>{" "}
          </PostContainer>
          <PostContainer>
            <InputDiv>
              <Label>First</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Second</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Third</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Fourth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Fifth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Sixth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Seventh</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Eighth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Ninth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Tenth</Label>
              <Input></Input>
            </InputDiv>
            <InputDiv>
              <Label>Eleventh</Label>
              <Input></Input>
            </InputDiv>{" "}
          </PostContainer>
          <PostContainer>
            <InputDiv>
              <Label>First</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Second</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Third</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Fourth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Fifth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Sixth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Seventh</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Eighth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Ninth</Label>
              <Input></Input>
            </InputDiv>{" "}
            <InputDiv>
              <Label>Tenth</Label>
              <Input></Input>
            </InputDiv>
            <InputDiv>
              <Label>Eleventh</Label>
              <Input></Input>
            </InputDiv>{" "}
          </PostContainer>
        </TopContainer>
        <BottomContainer>
          <Button onClick={submitHandler}>Submit</Button>
        </BottomContainer>
      </Container>
    </div>
  );
};

export default index;
