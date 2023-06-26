import { Table } from 'react-bootstrap';
import styles from './TableUsers.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { fetchALlUsers } from '../../services/UserService';

const cx = classNames.bind(styles);

const TableUsers = () => {
    const [listUsers, setListUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        let res = await fetchALlUsers();

        if (res && res.data) {
            setListUsers(res.data);
        }
    };

    console.log(listUsers);

    return (
        <div className={cx('container')}>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                    </tr>
                </thead>
                <tbody>
                    {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </Table>
        </div>
    );
};

export default TableUsers;
