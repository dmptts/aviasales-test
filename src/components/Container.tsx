import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1350px;
  min-width: 1024px;
  margin: 0 auto;
  padding-left: 103px;
  padding-right: 103px;
`

type ContainerProps = {
  children: JSX.Element | JSX.Element[]
}

function Container ({children}: ContainerProps): JSX.Element {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  )
}

export default Container;