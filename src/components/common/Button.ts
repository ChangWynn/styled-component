import styled, { css } from "styled-components";

const largeStyles = ({ $large }: { $large?: boolean }) => {
  if ($large) {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `;
  }
};

export const Button = styled.button<{ $primary?: boolean; $large?: boolean }>`
  color: white;
  background: ${({ $primary }) =>
    $primary ? ({ theme }) => theme.primaryColor : ({ theme }) => theme.secondaryColor};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  // using functions
  ${largeStyles}

  &.selected {
    background: green;
  }

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
