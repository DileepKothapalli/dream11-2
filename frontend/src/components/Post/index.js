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
  const [teamscore, setTeamscore] = useState("");
  const [teamwickets, setTeamwickets] = useState("");
  const [teamscore2, setTeamscore2] = useState("");
  const [teamwickets2, setTeamwickets2] = useState("");

  const SortedTeam = () => {
    let team1 = [
      [first, 1],
      [second, 2],
      [third, 3],
      [fourth, 4],
      [fifth, 5],
      [sixth, 6],
      [seventh, 7],
      [eighth, 8],
      [ninth, 9],
      [tenth, 12],
      [eleventh, 11],
    ];
    let team2 = [
      [first2, 1],
      [second2, 2],
      [third2, 3],
      [fourth2, 4],
      [fifth2, 5],
      [sixth2, 6],
      [seventh2, 7],
      [eighth2, 8],
      [ninth2, 9],
      [tenth2, 12],
      [eleventh2, 11],
    ];
    let team3 = [];

    team1.sort(function (a, b) {
      return b[0] - a[0];
    });
    team2.sort(function (a, b) {
      return b[0] - a[0];
    });

    let i = 0,
      j = 0,
      k = 0;
    while (i < 11) {
      let ans;
      if (j > 6) {
        if (team2[k][1] > 9) {
          ans = ((200 + team2[k][1]) / 100).toFixed(2);
        } else {
          ans = ((20 + team2[k][1]) / 10).toFixed(1);
        }

        k++;
      } else if (k > 6) {
        if (team1[j][1] > 9) {
          ans = ((100 + team1[j][1]) / 100).toFixed(2);
        } else {
          ans = ((10 + team1[j][1]) / 10).toFixed(1);
        }
        j++;
      } else if (+team1[j][0] > +team2[k][0]) {
        if (team1[j][1] > 9) {
          ans = ((100 + team1[j][1]) / 100).toFixed(2);
        } else {
          ans = ((10 + team1[j][1]) / 10).toFixed(1);
        }

        j++;
      } else {
        if (team2[k][1] > 9) {
          ans = ((200 + team2[k][1]) / 100).toFixed(2);
        } else {
          ans = ((20 + team2[k][1]) / 10).toFixed(1);
        }

        k++;
      }

      team3.push(ans);
      i++;
    }

    let one = team3[0],
      two = team3[1];

    team3.shift();
    team3.shift();

    team3.sort((a, b) => a - b);

    // math.sort(team3);
    team3.splice(0, 0, two);
    team3.splice(0, 0, one);
    console.log(team3);

    setFirst3(team3[0]);
    setSecond3(team3[1]);
    setThird3(team3[2]);
    setFourth3(team3[3]);
    setFifth3(team3[4]);
    setSixth3(team3[5]);
    setSeventh3(team3[6]);
    setEighth3(team3[7]);
    setNinth3(team3[8]);
    setTenth3(team3[9]);
    setEleventh3(team3[10]);
    console.log(team3[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    SortedTeam();
    await new Promise((r) => setTimeout(r, 2000));
    console.log("this is ");
    await Axios.post("http://localhost:8080/insert", {
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
      teamscore: teamscore,
      teamwickets: teamwickets,
      teamscore2: teamscore2,
      teamwickets2: teamwickets2,
    });
  };

  return (
    <div>
      <Navbar />

      <Container>
        <form onSubmit={submitHandler}>
          <TopContainer>
            <PostContainer>
              <InputDiv>
                <Label>First</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setFirst(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Second</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setSecond(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Third</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setThird(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fourth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setFourth(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fifth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setFifth(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Sixth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setSixth(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Seventh</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setSeventh(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Eighth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setEighth(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Ninth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setNinth(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Tenth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setTenth(event.target.value);
                  }}
                />
              </InputDiv>
              <InputDiv>
                <Label>Eleventh</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setEleventh(event.target.value);
                  }}
                />
              </InputDiv>{" "}
            </PostContainer>{" "}
            <PostContainer>
              <InputDiv>
                <Label>First</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setFirst2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Second</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setSecond2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Third</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setThird2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fourth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setFourth2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fifth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setFifth2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Sixth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setSixth2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Seventh</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setSeventh2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Eighth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setEighth2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Ninth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setNinth2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Tenth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setTenth2(event.target.value);
                  }}
                />
              </InputDiv>
              <InputDiv>
                <Label>Eleventh</Label>
                <Input
                  type="text"
                  required
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
                  required
                  onChange={(event) => {
                    setFirst3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Second</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setSecond3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Third</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setThird3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fourth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setFourth3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Fifth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setFifth3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Sixth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setSixth3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Seventh</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setSeventh3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Eighth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setEighth3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Ninth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setNinth3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Tenth</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setTenth3(event.target.value);
                  }}
                />
              </InputDiv>
              <InputDiv>
                <Label>Eleventh</Label>
                <Input
                  type="text"
                  required
                  onChange={(event) => {
                    setEleventh3(event.target.value);
                  }}
                />
              </InputDiv>{" "}
            </PostContainer>{" "}
            
            <PostContainer>
              <InputDiv>
                <Label>Team1 Score</Label>
                <Input
                  required
                  type="text"
                  onChange={(event) => {
                    setTeamscore(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Team1 Wickets</Label>
                <Input
                  required
                  type="text"
                  onChange={(event) => {
                    setTeamwickets(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Team2 Score</Label>
                <Input
                  required
                  type="text"
                  onChange={(event) => {
                    setTeamscore2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
              <InputDiv>
                <Label>Team2 Wickets</Label>
                <Input
                  required
                  type="text"
                  onChange={(event) => {
                    setTeamwickets2(event.target.value);
                  }}
                />
              </InputDiv>{" "}
            </PostContainer>
          </TopContainer>
          <BottomContainer>
            <Button type="submit">Submit</Button>
          </BottomContainer>
        </form>
      </Container>
    </div>
  );
};

export default Post;
