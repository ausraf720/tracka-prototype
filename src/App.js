import './App.css';
import BetTracker from './BetTracker.jsx'
import BetSubmitter from './BetSubmitter.jsx';
import Leaderboard from './Leaderboard.jsx'
import { useState } from 'react';

const user = "Raphael"

function App() {

  const [page, setPage] = useState('tracker')


  return (
    <div className="App">
      <h1>User: {user}</h1>
      <div>
        Choose between tracker, leaderboard, or submit new bet:
        <button onClick={() => setPage('tracker')}>
          Tracker
        </button>
        <button onClick={() => setPage('leaderboard')}>
          Leaderboard
        </button>
        <button onClick={() => setPage('submitter')}>
          New Bet
        </button>
      </div>

      {page == 'tracker' && <h3>Bets tracker</h3>}
      {page == 'tracker' && <BetTracker/>}
      {page == 'leaderboard' && <h3>Leaderboard</h3>}
      {page == 'leaderboard' && <Leaderboard/>}
      {page == 'submitter' && <h3>Bets Submitter</h3>}
      {page == 'submitter' && <BetSubmitter/>}
    </div>
  );
}

export default App;
