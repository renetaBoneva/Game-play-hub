import './App.css';
import { Navigation } from './components/Navigation/Navigation';
import { MemoryGame } from './components/games/Memory Game/MemoryGame'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navigation />
      <div className='contentWrapper'>
        <Routes>
          {/* <BubbleGame /> */}
          <Route path='/memoryGame' element={<MemoryGame />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
