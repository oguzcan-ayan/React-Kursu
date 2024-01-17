import React, { useState } from 'react';
import './App.css';
import UserDetail from './components/UserDetail';
import UserList from './components/UserList';

function App() {

  const [activeUserId, setActiveUserId] = useState(null);
  return (
  <div className="App">
    <span>
      Active User Id : {activeUserId}
    </span>
    <div>
      <UserList setActiveUserId = {setActiveUserId}/>
    </div>
    <div>
      {activeUserId !== null && <UserDetail activeUserId={activeUserId}/>}
    </div>
  </div>
  );
}

export default App;
