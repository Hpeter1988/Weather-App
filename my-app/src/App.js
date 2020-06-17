import React from 'react';
import './App.css';
import { UserMainPage } from './component/UserMainPage'
import  { ContextProvider } from './contexts/ContextProvider'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <UserMainPage/>
      </ContextProvider>
    </div>
  );
}

export default App;
