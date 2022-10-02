import styled from 'styled-components';

type ButtonProps = {
  children: string
}

const ButtonElem = styled.button`
  width: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 20px;
  padding-right: 20px;

  font-size: 0.75em;
  font-weight: 600;
  color: var(--default-white);
  text-align: center;

  background-color: var(--dodger-blue);
  border: none;
  border-radius: 5px;
`

function Button ({children}: ButtonProps): JSX.Element {
  return (
    <ButtonElem>{children}</ButtonElem>
  )
}

export default Button;