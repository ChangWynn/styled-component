import styled from "styled-components";
import { Input } from "./Input";
import { useState } from "react";

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`;

const InputPasswordStyled = styled(Input).attrs(() => ({
  type: "password",
  placeholder: "Password",
}))`
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

interface PasswordInputProps {
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
}

export const PasswordInput = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <PasswordInputWrapper>
        <InputPasswordStyled {...props} />
        <ToggleButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "Hide" : "Show"}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? props.value : ""}</div>
    </>
  );
};
