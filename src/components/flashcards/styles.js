import styled from "styled-components";
import theme from "../../lib/styles/theme";

export const CardWrapper = styled.div`
  position: relative;
  height: 300px;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  &::before,
  &::after {
    z-index: -2;
    top: -20px;
    position: absolute;
    content: "";
    height: 300px;
    width: 500px;
    background-color: transparent;
    box-shadow: 1px 4px 23px rgba(0, 0, 0, 0.06);
    border-radius: ${theme.borderRadius};
  }

  &::after {
    z-index: -1;
    top: -10px;
  }

  &:hover .card {
    transform: rotateY(180deg);
  }
`;

export const Card = styled.div`

  margin-bottom: ${theme.spacing.large}
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.white};
  box-shadow: 1px 4px 23px rgba(0, 0, 0, 0.12);
  border-radius: ${theme.borderRadius};
  text-align: center;
  transition: ${theme.transition};
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  perspective: 1000px;
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;

  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);

  
  .front, .back {
    position: absolute;
    backface-visibility: hidden;
    padding: ${theme.spacing.medium};

  }

  .front {
    transition: transform 0.8s;
    transform-style: preserve-3d; 
  }

  .back {
    transform: rotateY(180deg);
  }

 
`;

export const Side = styled.label`
  text-transform: uppercase;
  font-size: ${theme.type.xsmall};
  color: ${theme.colors.primary};
  font-weight: bold;
  letter-spacing: ${theme.spacing.letter};
`;
