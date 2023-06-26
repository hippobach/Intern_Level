import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header/Header';
import TableUsers from './components/TableUsers/TableUsers';
import ModalAddUser from './components/Modal/ModalAddUser';

function App() {
    const [isShowModal, setIsShowModal] = useState(false);

    const handleShowModal = () => {
        setIsShowModal(true);
    };

    const handleClose = () => {
        setIsShowModal(false);
    };

    return (
        <div>
            <Header />
            <Container>
                <div className="my-3 d-flex justify-content-between align-items-center">
                    <h1 style={{ fontSize: '16px' }}>
                        <b>List Users:</b>
                    </h1>
                    <button className="btn btn-success" onClick={handleShowModal}>
                        Add New User
                    </button>
                </div>
                <TableUsers />
            </Container>
            <ModalAddUser show={isShowModal} onHandleClose={handleClose} />
        </div>
    );
}

export default App;
