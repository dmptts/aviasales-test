import styled from 'styled-components';

type ButtonProps = {
  children: string,
  clickHandler: () => void,
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
  cursor: pointer;
`

function Button ({ children, clickHandler }: ButtonProps): JSX.Element {
  return (
    <ButtonElem onClick={clickHandler}>{children}</ButtonElem>
  )
}

export default Button;