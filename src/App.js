import './App.css';
import { MemoryGame } from './components/games/Memory Game/MemoryGame'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        {/* <BubbleGame /> */}
        <Route path='/memoryGame' element={<MemoryGame />} />
      </Routes>
      </>
  );
}

export default App;
