import Container from './Container';
import Filter from './Filter';
import Header from './Header';
import MoreBtn from './More';
import Sorting from './Sorting';
import TicketList from './TicketList';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <Filter />
          <div>
            <Sorting />
            <TicketList />
            <MoreBtn />
          </div>
        </Container>
      </main>
    </div>
  );
}

export default App;
