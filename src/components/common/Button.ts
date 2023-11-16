import styled, { css } from "styled-components";

export const Button = styled.button<{ $primary?: boolean; $large?: boolean }>`
  color: white;
  background: ${({ $primary }) => ($primary ? "#fdd54f" : "#f8049c")};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  ${({ $large }) =>
    $large
      ? css`
          padding: 10px;
          border-radius: 5px;
          font-size: 1.5em;
        `
      : css`
          padding: 8px;
          border-radius: 4px;
          font-size: 1em;
        `}

  &.selected {
    background: green;
  }

  &:disabled {
    background: #eee;
    color: #666;
  }
`;
