import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import TableUsers from './components/TableUsers/TableUsers';

function App() {
    return (
        <div>
            <Header />
            <Container>
                <TableUsers />
            </Container>
        </div>
    );
}

export default App;
