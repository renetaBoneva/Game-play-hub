import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { MemoryGame } from './components/games/Memory Game/MemoryGame'
import { Routes, Route } from 'react-router-dom'
import { Login } from './components/user/Login/Login';
import { Register } from './components/user/Register/Register';
import { NotFound } from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Navigation />
      <div className='contentWrapper'>
        <Routes>
          <Route path='/memoryGame' element={<MemoryGame />} />

          {/* TODO: */}
          {/* <Route path='/underTheSea' element={<BubbleGame />} /> */}
          {/* <Route path='/catalog' element={} /> */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* <Route path='/logout' element={} /> */}
          <Route path='*' element={<NotFound />} />

        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
