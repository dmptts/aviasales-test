import styled from 'styled-components'

type TabProps<T> = {
  value: T,
  isActive?: boolean,
  children: string
}

const TabButton = styled.button<{isActive: boolean}>`
  width: 100%;
  padding: 15px;

  font-size: 0.75em;
  font-weight: 600;
  color: ${({isActive}) => isActive
    ? 'var(--default-white)'
    : 'var(--charcoal)'};
  text-transform: uppercase;

  background-color: ${({isActive}) => isActive
    ? 'var(--dodger-blue)'
    : 'var(--default-white)'};
  border: 1px solid ${({isActive}) => isActive
    ? 'var(--dodger-blue)'
    : 'var(--solitude)'};

  cursor: pointer;

  &:hover {
    background-color: ${({isActive}) => !isActive 
      && 'var(--azure)'};
  }
`

function Tab <T extends string | number>({value, isActive, children}: TabProps<T>): JSX.Element {
  return (
    <TabButton value={value} isActive={isActive as boolean}>{children}</TabButton>
  )
}

export default Tab;