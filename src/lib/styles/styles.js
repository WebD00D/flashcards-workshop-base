import styled from "styled-components";
import theme from "./theme";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonWrap = styled.div`
  height: 100px
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Button = styled.button`
  height: 48px;
  padding: 0 ${theme.spacing.large};
  margin-bottom: ${theme.spacing.small};

  text-transform: uppercase;
  font-size: ${theme.type.xsmall}
  background-color: ${theme.colors.black}
  color: ${theme.colors.white};
  border: none;
  border-radius: ${theme.borderRadius};
  font-weight: bold;
  letter-spacing: ${theme.spacing.letter};
  cursor: pointer;
  transition: ${theme.transition};
  outline: none;

  &:hover {
    opacity: 0.9
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      opacity: 0.5;
    }
  }

`;

export const Reset = styled.div`
  text-transform: uppercase;
  font-size: ${theme.type.xsmall}
  color: ${theme.colors.primary};
  font-weight: bold;
  letter-spacing: ${theme.spacing.letter};
  cursor: pointer;

  &:hover {
    opacity: 0.9
  }
`;

export const Label = styled.label`
  text-transform: uppercase;
  font-size: ${theme.type.xsmall};
  color: ${theme.colors.black};
  opacity: 0.5;
  font-weight: bold;
  letter-spacing: ${theme.spacing.letter};
`;
