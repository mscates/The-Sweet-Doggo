import styled from "styled-components";
import { Stack, PadBox } from "./layout"

export const Input = styled.input.attrs((props) => ({
  type: props.type,
  border: props.border,
  background: props.background,
  color: props.color,
  backgroundFocus: props.backgroundFocus,
}))`
  padding: 0.7rem;
  border: none;
  background-color: ${({ background }) =>
    background ? background : "hsl(0, 0%, 100%)"};
  color: ${({ color }) => color};
  border-radius: 0.25rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px hsl(0, 0%, 16%);
    background-color: ${({ backgroundFocus }) => backgroundFocus};
    border: ${({ border }) => (border ? border : "1px solid hsl(0, 0%, 55%)")};
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.titlecolor};
  text-align: center;
`;

export const InputGroup = ({ label, children, className }) => {
  return (
    <Stack className={className} as="label" gutter="sm">
      {label}
      {children}
    </Stack>
  );
};

export const StyledInputGroup = styled(InputGroup)`
  color: ${({ color }) => color};
`;

export const AccountText = styled.p`
  color: ${({ color }) => color};
`;

export const Button = styled(PadBox).attrs(() => ({
  as: "button",
  padding: ["sm", "xl"],
}))`
  background: black;
  color: white;
  border: none;
`;

export const LoginButton = styled(PadBox).attrs(() => ({
  as: "button",
  padding: ["md", "lg"],
}))`
  border: none;
  border-radius: 0.25rem;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  &:hover {
    background-color: hsl(214, 94%, 53%);
  }
`;
