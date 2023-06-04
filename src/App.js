import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExerciseList from './components/List';
import Nav from './components/Nav';
import Edit from './components/edit';
import Custer from './components/create-user';
import Excise from './components/create-exercise';
function App() {
  return (<>
    <Nav />
<BrowserRouter>
<Routes>
 
  <Route path='/'  element={<ExerciseList />}/>
  <Route path='/edit' element={<Edit />}/>
  <Route path='/custer' element={<Custer />}/>
  <Route path='/excise' element={<Excise />}/>
</Routes>
</BrowserRouter>
</>
  );
}

export default App;
