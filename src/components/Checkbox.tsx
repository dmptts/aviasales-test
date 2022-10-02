import {Dispatch} from 'react'
import styled from 'styled-components'
import {visuallyHidden} from '../global'

type CheckboxProps = {
  id: string,
  label: string,
  state: boolean,
  setter: Dispatch<boolean>
}

const CheckboxElem = styled.input`
  ${visuallyHidden}
`

const CheckboxLabel = styled.label<{checked: boolean}>`
  position: relative;
  font-size: 13px;
  padding-left: 30px;

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;

    border: ${({checked}) => checked ? '1px solid var(--dodger-blue)' : '1px solid var(--heather)'};
    border-radius: 2px;
  }
`

function Checkbox ({id, label, state, setter}: CheckboxProps): JSX.Element {
  const handleChange = () => {
    setter(!state);
  };

  return (
    <>
      <CheckboxElem
        id={id}
        type='checkbox'
        checked={state}
        onChange={handleChange}
      />
      <CheckboxLabel htmlFor={id} checked={state}>{label}</CheckboxLabel>
    </>
  )
}

export default Checkbox;