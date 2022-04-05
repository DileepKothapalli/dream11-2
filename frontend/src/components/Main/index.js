import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  BottomContainer,
  Card,
  Container,
  Details,
  Div,
  Info,
  Row,
  Score,
  Team,
  TopContainer,
} from "./MainElements";

const Main = () => {
  const [total, setTotal] = useState("");
  let arr = [
    "first",
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eighth",
    "ninth",
    "tenth",
    "eleventh",
    "first2",
    "second2",
    "third2",
    "fourth2",
    "fifth2",
    "sixth2",
    "seventh2",
    "eighth2",
    "ninth2",
    "tenth2",
    "eleventh2",
    "first3",
    "second3",
    "third3",
    "fourth3",
    "fifth3",
    "sixth3",
    "seventh3",
    "eighth3",
    "ninth3",
    "tenth3",
    "eleventh3",
  ];

  useEffect(() => {
    axios.get("http://localhost:8080/read").then((response) => {
      setTotal(response.data);
    });
  }, [total]);
  return (
    <Div>
      {(function () {
        let containers = [];
        for (let i = 0; i < total.length; i++) {
          containers.push(
            <Container>
              <TopContainer>
                <Details l="flex-start">
                  <Team>TEAM1</Team>
                  <Score>131/5</Score>
                </Details>
                <Details l="flex-end">
                  <Team>TEAM2</Team>
                  <Score>133/4</Score>
                </Details>
              </TopContainer>
              <BottomContainer>
                {(function () {
                  let rows = [];
                  for (let j = 0; j < 3; j++) {
                    rows.push(
                      <Row>
                        {(function () {
                          let cards = [];
                          for (let k = 0; k < 11; k++) {
                            cards.push(
                              <Card>
                                <Info>{total[i][arr[j * 11 + k]]}</Info>
                              </Card>
                            );
                          }
                          return cards;
                        })()}
                      </Row>
                    );
                  }
                  return rows;
                })()}
              </BottomContainer>
            </Container>
          );
        }
        return containers;
      })()}
    </Div>
  );
};

export default Main;
