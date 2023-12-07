import React from 'react';

interface User {
    id: number,
    name: string,
    email: string,
}

const UsersTable = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', { cache: 'no-store' });
    const data = await response.json();
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {data.map((user: User) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UsersTable;
