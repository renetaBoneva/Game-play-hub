import './App.css';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { MemoryGame } from './components/games/Memory Game/MemoryGame'
import { Routes, Route } from 'react-router-dom'

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
          {/* <Route path='/login' element={} /> */}
          {/* <Route path='/register' element={} /> */}
          {/* <Route path='/logout' element={} /> */}
          {/* <Route path='/not-found' element={} /> */}
          
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
