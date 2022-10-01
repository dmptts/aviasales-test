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
        <Filter />
        <div>
          <Sorting />
          <TicketList />
          <MoreBtn />
        </div>
      </main>
    </div>
  );
}

export default App;
