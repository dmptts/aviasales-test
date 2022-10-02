import Container from './Container';
import Filter from './Filter';
import Header from './Header';
import Sorting from './Sorting';
import TicketList from './TicketList';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <aside>
            <Filter />
          </aside>
          <div>
            <Sorting />
            <TicketList />
            <Button>Показать еще 5 билетов!</Button>
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
