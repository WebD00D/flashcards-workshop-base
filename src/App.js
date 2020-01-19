/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as UI from "./lib/styles/styles";
import FlashCards from "./components/flashcards";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://opentdb.com/api.php?amount=10&category=9"
      );
      if (response.ok) {
        const json = await response.json();
        setQuestions(json.results);
        initStack(json.results);
      }
    } catch (error) {
      // swallowed 🤢
    } finally {
      setLoading(false);
    }
  };

  const initStack = questionStack => {
    const index = Math.floor(Math.random() * Math.floor(questionStack.length));
    setQuestion(questionStack[index]);
  };

  const setNextQuestion = () => {
    const index = Math.floor(Math.random() * Math.floor(questions.length));
    setQuestion(questions[index]);
    removeCardFromStack(index);
  };

  const removeCardFromStack = index => {
    const questionStack = [...questions];
    questionStack.splice(index, 1);
    setQuestions(questionStack);
  };

  return (
    <UI.Wrapper data-testid="app">
      <FlashCards
        question={question}
        questions={questions || []}
        handleNextQuestion={setNextQuestion}
        handleFetchCards={getData}
        loading={loading}
      />
    </UI.Wrapper>
  );
};

export default App;
