import styled from "styled-components";

interface ToggleProps {
  $isActive: boolean;
  $onToggle: () => void;
}

export const Toggle = ({ $isActive, $onToggle }: ToggleProps) => {
  return (
    <ToggleWrapper onClick={$onToggle}>
      <Notch $isActive={$isActive} />
    </ToggleWrapper>
  );
};

export const ToggleWrapper = styled.div<{ onClick: Function }>`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  margin: auto;
  display: flex;
  background-image: linear-gradient(
    to bottom,
    ${({ theme }) => theme.primaryColor},
    ${({ theme }) => theme.secondaryColor}
  );
`;

export const Notch = styled.div<{ $isActive: boolean }>`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50px;
  transition: transform 0.1s linear;
  transform: translate(${({ $isActive }) => ($isActive ? "26px" : "1px")});
`;
