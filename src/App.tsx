import React from 'react'
import './css/App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    !user 
    ? 
    <Login /> 
    : 
    <div
    className='app'
    >
    <Header />
    <div
    className='app__body'
    >
      <SideBar />
      <Feed />
    </div>
    </div>
  )
  ;
}

export default App;
