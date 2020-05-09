import React from 'react';
import UserList from './components/UserList';
import NavBar from './shared/NavBar';
import Footer from './shared/Footer';
function App() {
  
  return (
    <div className="App">
      <NavBar />
      <UserList />
      <Footer />
    </div>
  );
}

export default App;
