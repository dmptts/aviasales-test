import { ReactComponent as Logo } from '../img/logo.svg';
import Container from './Container';

function Header (): JSX.Element {
  return (
    <header>
      <Container>
        <Logo />
      </Container>
    </header>
  )
}

export default Header;