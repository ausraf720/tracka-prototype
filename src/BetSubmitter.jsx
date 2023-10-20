import './App.css'
import { useState } from 'react'

function BetSubmitter() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [date, setDate] = useState('')
    const [sport, setSport] = useState('')
    const [odds, setOdds] = useState('')
    const [stake, setStake] = useState('')

    // Event handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Handle the form submission, e.g., send data to an API
        alert(`Date: ${date}, Sport: ${sport}, Odds: ${odds}, Stake: ${stake}`);
    };

    function inputGen(name, val, setVal, type) {

        return (
            <div>
                <label>{name}: </label>
                <input
                    type={type}
                    id={name.toLowerCase()}
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                />
            </div>
        )
    }

    return (
        <div>
            <h2>Submit Section</h2>
            <form onSubmit={handleSubmit}>
                {inputGen('Date', date, setDate, "date")}
                {inputGen('Sport', sport, setSport, "text")}
                {inputGen('Odds', odds, setOdds, "number")}
                {inputGen('Stake', stake, setStake, "number")}
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default BetSubmitter;