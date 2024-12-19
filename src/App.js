import './App.css';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Basket from './pages/Basket';
import { StoreProvider } from './components/context-and-reducer/storeContent';

function App() {
  return (
    <StoreProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/basket' element={<Basket />}/>
        
      </Routes>
    </Router>
    </StoreProvider>
  );
}

export default App;
