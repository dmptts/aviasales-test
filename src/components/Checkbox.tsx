import React, {Dispatch} from 'react'
import styled from 'styled-components'
import {visuallyHidden} from '../global'
import tickIcon from '../img/icon-tick.svg'

type CheckboxProps = {
  id: string,
  label: string,
  state: boolean,
  setter: Dispatch<boolean>
}

const CheckboxContainer = styled.div`
  position: relative;
`

const CheckboxElem = styled.input`
  ${visuallyHidden}
`

const CheckboxLabel = styled.label<{checked: boolean}>`
  position: relative;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 20px;

  font-size: 13px;
  user-select: none;

  cursor:pointer;

  &::before {
    position: absolute;
    content: '';
    top: 50%;
    left: 20px;
    width: 20px;
    height: 20px;

    background: ${({checked}) => checked 
      && `center no-repeat url(${tickIcon})`};
    border: ${({checked}) => checked
      ? '1px solid var(--dodger-blue)'
      : '1px solid var(--heather)'};
    border-radius: 2px;

    transform: translateY(-50%);
  }
  
  &:hover {
    background-color: var(--azure);
  }
`

function Checkbox ({id, label, state, setter}: CheckboxProps): JSX.Element {
  const handleChange = () => {
    setter(!state);
  };

  return (
    <CheckboxContainer>
      <CheckboxElem
        id={id}
        type='checkbox'
        checked={state}
        onChange={handleChange}
      />
      <CheckboxLabel htmlFor={id} checked={state}>{label}</CheckboxLabel>
    </CheckboxContainer>
  )
}

export default Checkbox;