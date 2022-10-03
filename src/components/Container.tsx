import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-left: 103px;
  padding-right: 103px;
`

type ContainerProps = {
  children: JSX.Element | JSX.Element[],
  className?: string
}

function Container ({children, className}: ContainerProps): JSX.Element {
  return (
    <StyledContainer className={className}>
      {children}
    </StyledContainer>
  )
}

export default Container;