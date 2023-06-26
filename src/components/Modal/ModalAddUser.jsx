import { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from './ModalAddUser.module.scss';

const cx = classNames.bind(styles);

const ModalAddUser = ({ show, onHandleClose }) => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const handleSetName = (e) => {
        setName(e.target.value);
    };

    const handleSetJob = (e) => {
        setJob(e.target.value);
    };

    const handleSaveUser = () => {
        console.log('name: ', name, 'job', job);
    };

    return (
        <div className="modal show" style={{ display: 'flex', position: 'initial' }}>
            <Modal show={show} onHide={onHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={handleSetName} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Job</Form.Label>
                            <Form.Control type="text" value={job} onChange={handleSetJob} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onHandleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveUser}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

ModalAddUser.propTypes = {
    show: PropTypes.bool.isRequired,
    onHandleClose: PropTypes.func.isRequired,
};

export default ModalAddUser;
