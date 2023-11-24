import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from './components/Create';

function App() {
  return (
   <div className='app'>
    <Navbar />
     <BrowserRouter>
       <Routes>
        <Route path="/">
          <Route index element={<div className='content'>
            <Home />
          </div>} />
          <Route path="create" element={<div className='content'>
            <Create />
          </div>} />

        </Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;