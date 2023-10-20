import './App.css';
import BetTracker from './BetTracker.jsx'
import Leaderboard from './Leaderboard.jsx'
import { useState } from 'react';

const user = "Raphael"

function App() {

  const [page, setPage] = useState('tracker')


  return (
    <div className="App">
      <h1>User: {user}</h1>
      <div>
        Choose between tracker or leaderboard:
        <button onClick={() => setPage('tracker')}>
          Tracker
        </button>
        <button onClick={() => setPage('leaderboard')}>
          Leaderboard
        </button>
      </div>

      {page == 'tracker' && <h3>Bets tracker</h3>}
      {page == 'tracker' && <BetTracker/>}
      {page == 'leaderboard' && <h3>Leaderboard</h3>}
      {page == 'leaderboard' && <Leaderboard/>}
    </div>
  );
}

export default App;
