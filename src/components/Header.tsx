import styled from 'styled-components';
import { ReactComponent as Logo } from '../img/logo.svg';
import Container from './Container';

const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;

  padding-top: 50px;
  padding-bottom: 30px;
`

function Header (): JSX.Element {
  return (
    <header>
      <HeaderContainer>
        <Logo />
      </HeaderContainer>
    </header>
  )
}

export default Header;