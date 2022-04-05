import React, { useState } from "react";
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

const Post = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [fourth, setFourth] = useState("");
  const [fifth, setFifth] = useState("");
  const [sixth, setSixth] = useState("");
  const [seventh, setSeventh] = useState("");
  const [eighth, setEighth] = useState("");
  const [ninth, setNinth] = useState("");
  const [tenth, setTenth] = useState("");
  const [eleventh, setEleventh] = useState("");
  const [first2, setFirst2] = useState("");
  const [second2, setSecond2] = useState("");
  const [third2, setThird2] = useState("");
  const [fourth2, setFourth2] = useState("");
  const [fifth2, setFifth2] = useState("");
  const [sixth2, setSixth2] = useState("");
  const [seventh2, setSeventh2] = useState("");
  const [eighth2, setEighth2] = useState("");
  const [ninth2, setNinth2] = useState("");
  const [tenth2, setTenth2] = useState("");
  const [eleventh2, setEleventh2] = useState("");
  const [first3, setFirst3] = useState("");
  const [second3, setSecond3] = useState("");
  const [third3, setThird3] = useState("");
  const [fourth3, setFourth3] = useState("");
  const [fifth3, setFifth3] = useState("");
  const [sixth3, setSixth3] = useState("");
  const [seventh3, setSeventh3] = useState("");
  const [eighth3, setEighth3] = useState("");
  const [ninth3, setNinth3] = useState("");
  const [tenth3, setTenth3] = useState("");
  const [eleventh3, setEleventh3] = useState("");

  const submitHandler = () => {
    console.log("this is ");
    Axios.post("http://localhost:8080/insert", {
      first: first,
      second: second,
      third: third,
      fourth: fourth,
      fifth: fifth,
      sixth: sixth,
      seventh: seventh,
      eighth: eighth,
      ninth: ninth,
      tenth: tenth,
      eleventh: eleventh,
      first2: first2,
      second2: second2,
      third2: third2,
      fourth2: fourth2,
      fifth2: fifth2,
      sixth2: sixth2,
      seventh2: seventh2,
      eighth2: eighth2,
      ninth2: ninth2,
      tenth2: tenth2,
      eleventh2: eleventh2,
      first3: first3,
      second3: second3,
      third3: third3,
      fourth3: fourth3,
      fifth3: fifth3,
      sixth3: sixth3,
      seventh3: seventh3,
      eighth3: eighth3,
      ninth3: ninth3,
      tenth3: tenth3,
      eleventh3: eleventh3,
    });
  };

  return (
    <div>
      <Navbar />

      <Container>
        <form>
          <TopContainer>
            <PostContainer>
              <InputDiv>
                <Label>First</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setFirst(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Second</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setSecond(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Third</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setThird(event.target.value);
                  }}
                  required
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fourth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setFourth(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fifth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setFifth(event.target.value);
                  }}
                  required
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Sixth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setSixth(event.target.value);
                  }}
                  required
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Seventh</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setSeventh(event.target.value);
                  }}
                  required
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Eighth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setEighth(event.target.value);
                  }}
                  required
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Ninth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setNinth(event.target.value);
                  }}
                  required
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Tenth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setTenth(event.target.value);
                  }}
                  required
                />
              </InputDiv>
              <InputDiv>
                <Label>Eleventh</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setEleventh(event.target.value);
                  }}
                  required
                />
              </InputDiv>{" "}
            </PostContainer>{" "}
            <PostContainer>
              <InputDiv>
                <Label>First</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setFirst2(event.target.value);
                  }}
                  required
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Second</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setSecond2(event.target.value);
                  }}
                  required
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Third</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setThird2(event.target.value);
                  }}
                  required
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fourth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setFourth2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fifth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setFifth2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Sixth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setSixth2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Seventh</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setSeventh2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Eighth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setEighth2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Ninth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setNinth2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Tenth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setTenth2(event.target.value);
                  }}
                />
              </InputDiv>
              <InputDiv>
                <Label>Eleventh</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setEleventh2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
            </PostContainer>{" "}
            <PostContainer>
              <InputDiv>
                <Label>First</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setFirst3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Second</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setSecond3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Third</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setThird3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fourth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setFourth3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fifth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setFifth3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Sixth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setSixth3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Seventh</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setSeventh3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Eighth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setEighth3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Ninth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setNinth3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Tenth</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setTenth3(event.target.value);
                  }}
                />
              </InputDiv>
              <InputDiv>
                <Label>Eleventh</Label>
                <Input
                  type="text"
                  onChange={(event) => {
                    setEleventh3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
            </PostContainer>
          </TopContainer>
          <BottomContainer>
            <Button onSubmit={submitHandler()}>Submit</Button>
          </BottomContainer>
        </form>
      </Container>
    </div>
  );
};

export default Post;
