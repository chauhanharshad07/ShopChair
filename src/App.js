import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout'
import Home from './Pages/Home'
import Details from './Pages/Details'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
             <Route index element={<Home/>} />
             <Route path='/:slug' element={<Details/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
