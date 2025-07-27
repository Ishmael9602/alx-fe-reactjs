import React from 'react';
import './App.css';
import UserContext from './UserContext';          
import ProfilePage from './ProfilePage';         

function App() {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com'
  };

  return (
    <UserContext.Provider value={user}>           
      <div>
        <h1>React useContext Example</h1>
        <ProfilePage />                           
      </div>
    </UserContext.Provider>
  );
}

export default App;
