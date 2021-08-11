// imports
import React from 'react'
import './css/App.css';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import Login from './components/Login';
import { 
  useStateValue 
} from './StateProvider';

// component
const App: React.FC = () => {
  // using the custom hook
  const [{ user }, dispatch] = useStateValue();

  // template
  return (
    // checking if the user is authenticated
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
  );
}

export default App;