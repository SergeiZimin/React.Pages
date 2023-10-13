import React, { useState } from 'react';
import HomePage from './components/HomePage';
import UsersPage from './components/UsersPage';
import ContactsPage from './components/ContactsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // Используем состояние для управления текущей страницей

  let content = null;

  // В зависимости от значения currentPage отображаем соответствующую страницу
  if (currentPage === 'home') {
    content = <HomePage />;
  } else if (currentPage === 'users') {
    content = <UsersPage />;
  } else if (currentPage === 'contacts') {
    content = <ContactsPage />;
  }

  return (
    <div>
      <button onClick={() => setCurrentPage('home')}>Главная</button>
      <button onClick={() => setCurrentPage('users')}>Пользователи</button>
      <button onClick={() => setCurrentPage('contacts')}>Контакты</button>

      {content}
    </div>
  );
}

export default App;

