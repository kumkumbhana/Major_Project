import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/navbar/Navbar';
import RoutesFile from './RoutesFile';
import {fetchAllQuestions} from './actions/question'
import { fetchAllUsers } from './actions/users';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
      <div className='App'>
        <Router>
          <Navbar/>
          <RoutesFile/>
        </Router>
      </div>
  );
}

export default App;
   