import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: (props.type = "text"),
  border: props.border,
  background: props.background,
  color: props.color,
  backgroundFocus: props.backgroundFocus

}))`
  padding: 0.7rem;
  border: none;
  background-color: ${({ background }) =>
    background ? background : "white"};
  color: ${({ color }) => (color ? color : 'white')};
  border-radius: 0.25rem;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px hsl(0, 0%, 16%);
    background-color: ${({ backgroundFocus }) => backgroundFocus ? backgroundFocus : 'hsl(0, 0%, 20%)'};
    border: 1px solid hsl(0, 0%, 50%);
  }
`;
