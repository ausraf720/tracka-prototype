import './App.css';
import BetTracker from './BetTracker.jsx'
import { useState } from 'react';

const user = "Raphael"

function App() {

  const [page, setPage] = useState('tracker')


  return (
    <div className="App">
        <h2>User: {user}</h2>
        <div>
          Choose between tracker or leaderboard:
          <button onClick={() => setPage('tracker')}>
            Tracker
          </button>
          <button onClick={() => setPage('leaderboard')}>
            Leaderboard
          </button>
        </div>

        {page == 'tracker' && <BetTracker/>}
        {page == 'leaderboard' && <h3>Leaderboard</h3>}
    </div>
  );
}

export default App;
