import React, { useState } from 'react';

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', phone: '', email: '' });

  const addUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: '', phone: '', email: '' });
  };

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Пользователи</h2>
      <table>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
            <th>Email</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(index)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Добавить нового пользователя</h3>
      <form>
        <input
          type="text"
          placeholder="Имя"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Телефон"
          value={newUser.phone}
          onChange={(e) => setNewUser({ ...newUser, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
        <button type="button" onClick={addUser}>
          Добавить
        </button>
      </form>
    </div>
  );
}

export default UsersPage;
