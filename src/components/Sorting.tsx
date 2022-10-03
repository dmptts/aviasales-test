import {useState} from 'react';
import {SortingTypes} from '../const';
import Tab from './Tab';
import Tabs from './Tabs';

function Sorting (): JSX.Element {
  const [currentSorting, setCurrentSorting] = useState<SortingTypes>(SortingTypes.Cheaper);
  
  return (
    <Tabs setter={setCurrentSorting} currentTab={currentSorting}>
      <Tab value={SortingTypes.Cheaper}>Самый дешевый</Tab>
      <Tab value={SortingTypes.Faster}>Самый быстрый</Tab>
      <Tab value={SortingTypes.Optimal}>Оптимальный</Tab>
    </Tabs>
  )
}

export default Sorting;