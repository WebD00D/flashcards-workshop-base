/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as UI from "./lib/styles/styles";
import FlashCards from "./components/flashcards";

const App = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // Fetches a question stack from Open Trivia API
  };

  const initStack = questionStack => {
    // Should pick and set a random question from the stack for initial display
  };

  const setNextQuestion = () => {
    // should pick a new random question, set it visible, and remove it from available list of questions
    // to choose from
  };

  const removeCardFromStack = index => {};

  return (
    <UI.Wrapper data-testid="app">
      <FlashCards />
    </UI.Wrapper>
  );
};

export default App;
