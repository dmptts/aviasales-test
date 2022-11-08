import Container from './Container';
import Filter from './Filter';
import Header from './Header';
import Sorting from './Sorting';
import TicketList from './TicketList';
import styled from 'styled-components';

const MainContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 50px;
`

const Aside = styled.aside`
  width: 232px;
  padding-top: 20px;
  padding-bottom: 20px;

  background-color: var(--default-white);
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(var(--default-white), 0.1);
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

function App() {
  return (
    <div>
      <Header />
      <main>
        <MainContainer>
          <Aside>
            <Filter />
          </Aside>
          <MainContent>
            <Sorting />
            <TicketList />
          </MainContent>
        </MainContainer>
      </main>
    </div>
  );
}

export default App;
