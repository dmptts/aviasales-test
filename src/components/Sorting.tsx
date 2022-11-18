import {SortingTypes} from '../const';
import {useAppDispatch, useAppSelector} from '../hooks';
import {actions} from '../store/ticketsSlice';
import Tab from './Tab';
import Tabs from './Tabs';

function Sorting (): JSX.Element {
  const dispatch = useAppDispatch();
  const currentSorting = useAppSelector((state) => state.tickets.sortingType);
  const changeSorting = actions.changeSorting;

  const setCurrentSorting = (sortingType: SortingTypes) => {
    dispatch(changeSorting(sortingType))
  }
  
  return (
    <Tabs setter={setCurrentSorting} currentTab={currentSorting}>
      <Tab value={SortingTypes.Cheaper}>Самый дешевый</Tab>
      <Tab value={SortingTypes.Faster}>Самый быстрый</Tab>
      <Tab value={SortingTypes.Optimal}>Оптимальный</Tab>
    </Tabs>
  )
}

export default Sorting;