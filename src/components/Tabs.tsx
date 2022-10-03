import React, {Dispatch} from 'react';
import styled from 'styled-components';

type ButtonGroupProps<T> = {
  children: JSX.Element[],
  currentTab: T,
  setter: Dispatch<T>
}

const TabsGroup = styled.div`
  display: flex;
  
  button {
    border-right: none;
    border-radius: 0;
  }

  button:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    
  }

  button:last-child {
    border-right: 1px solid var(--solitude);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
` 

function Tabs <T>({children, currentTab, setter}: ButtonGroupProps<T>): JSX.Element {
  const handleClick = (evt: React.MouseEvent) => {
    setter((evt.target as HTMLButtonElement).value as T)
  }

  return (
    <TabsGroup onClick={handleClick}>
      {React.Children.map(children, (child) => React.cloneElement(child, {isActive: currentTab === child.props.value}))}
    </TabsGroup>
  )
}

export default Tabs;