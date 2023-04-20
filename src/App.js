import React from 'react';
import {  BrowserRouter as Router,Route } from 'react-router-dom';
import ExerciseList from './components/List';
import Nav from './components/Nav';
import Edit from './components/edit';
import Custer from './components/create-user';
import Excise from './components/create-exercise';
function App() {
  return (

<Router>
  <Nav />
  <Route path='/'  component={<ExerciseList />}/>
  <Route path='/edit' component={<Edit />}/>
  <Route path='/custer' component={<Custer />}/>
  <Route path='/excise' component={<Excise />}/>
</Router>

  );
}

export default App;
