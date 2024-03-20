import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from './components/Home'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/home' element={<Home />} ></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
