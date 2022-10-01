import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 1350px;
  margin: 0 auto;
  padding-left: 103px;
  padding-right: 103px;
`

type ContainerProps = {
  children: JSX.Element
}

function Container ({children}: ContainerProps): JSX.Element {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container;