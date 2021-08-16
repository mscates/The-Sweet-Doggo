import styled from 'styled-components'

export const Input = styled.input.attrs(props => ({
  type: props.type = 'text',
  size: props.size = '.7rem',
  border: props.border = "1px solid hsl(0, 0%, 50%)",
  background: props.background
}))`
padding: ${({ size }) => size};
border: ${({ border }) => border};
background-color: ${({ background }) => background ? background : "hsl(0, 0%, 100%)"};
color: white;
border-radius: .25rem;
&:focus {
outline: none;
box-shadow: 0 0 0 1px hsl(0, 0%, 16%);
background-color: hsl(0, 0%, 20%);
}
`