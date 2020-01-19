import React from "react";
import { render } from "@testing-library/react";
import Flashcards from ".";

const mockQuestionSet = {
  question: "This is the question?",
  correct_answer: "This is the answer."
};

test("renders question and answer", () => {
  const { getByText } = render(
    <Flashcards
      question={mockQuestionSet}
      questions={[{ ...mockQuestionSet }]}
    />
  );
  const questionEl = getByText(/This is the question?/i);
  expect(questionEl).toBeInTheDocument();

  const answerEl = getByText(/This is the answer./i);
  expect(answerEl).toBeInTheDocument();
});
