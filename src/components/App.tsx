import Container from './Container';
import Filter from './Filter';
import Header from './Header';
import Sorting from './Sorting';
import TicketList from './TicketList';
import Button from './Button';
import styled from 'styled-components';

const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
`

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainContainer>
          <aside>
            <Filter />
          </aside>
          <div>
            <Sorting />
            <TicketList />
            <Button>Показать еще 5 билетов!</Button>
          </div>
        </MainContainer>
      </main>
    </div>
  );
}

export default App;
