import styled from 'styled-components'

export const Input = styled.input.attrs(props => ({
  type: props.type,
  size: props.size,
  border: props.border
}))`
padding: ${({ size }) => size};
border: ${({ border }) => border};
background-color: hsl(0, 0%, 26%);
color: white;
border-radius: .25rem;
&:focus {
outline: none;
box-shadow: 0 0 0 1px hsl(0, 0%, 16%);
background-color: hsl(0, 0%, 20%);
}
`