/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "antd/dist/antd.css";
import * as UI from "../../lib/styles/styles";
import { Spin } from "antd";

import { CardWrapper, Card, Side } from "./styles";

const FlashCards = ({
  question,
  questions,
  handleNextQuestion,
  handleFetchCards,
  loading
}) => {
  const decodeText = text => {
    const txt = document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
  };

  return (
    <>
      <CardWrapper data-test-id="flashcard">
        <Card className="card">
          <div className="front">
            <Side>Question</Side>
            <div>
              {!loading ? question && decodeText(question.question) : <Spin />}
            </div>
          </div>
          <div className="back">
            <Side>Answer</Side>
            <div>{decodeText(question.correct_answer)}</div>
          </div>
        </Card>
      </CardWrapper>
      <UI.ButtonWrap>
        <UI.Button
          disabled={questions.length === 0}
          onClick={handleNextQuestion}
        >
          Next Question
        </UI.Button>
        {!loading && questions.length === 0 && (
          <UI.Reset onClick={handleFetchCards}>Refresh Deck</UI.Reset>
        )}
      </UI.ButtonWrap>

      <UI.Label>REMAINING IN STACK: {questions.length}</UI.Label>
    </>
  );
};

export default FlashCards;
