import './App.css'
import { useState } from 'react'


const tableHeaders = ['Time', 'Sport', 'Odds', 'Stake', 'Outcome']
const tl = tableHeaders.map(word => word.toLowerCase())

const htmlHeaders = tableHeaders.map(word => <th>{word}</th>)

function dataGen(dataArray, columns) {
    let obj = {}
    for (let i=0; i<5; i++) {
        obj[columns[i]] = dataArray[i]
    }
    return obj
}
const data1 = dataGen(['Monday', 'NFL', '3.5', '100', 'WIN'], tl)
const data2 = dataGen(['Monday', 'NBA', '5', '200', 'WIN'], tl)
const data3 = dataGen(['Friday', 'NFL', '2.5', '100', 'LOSE'], tl)
const data4 = dataGen(['Thursday', 'NBA', '4', '150', 'WIN'], tl)
console.log(data1)

const data = [data1, data2, data3, data4]

// Define the options for the dropdown
const sportOtions = ['NFL', 'NBA', 'All',]

// Handle the change of the selected value


function BetTracker() {
    const sportOptions = ['All', 'NFL', 'NBA']
    const outcomeOptions = ['All', 'WIN', 'LOSE']
    const [sport, setSport] = useState(sportOptions[0])
    const [outcome, setOutcome] = useState(outcomeOptions[0])

    return (
        <div>
            
            <div class="optionsArea">
                <span class="optionType">
                    <h2>Filter by sport</h2>
                    <select value={sport} onChange={(event) => setSport(event.target.value)}>
                        {sportOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                    <p>Selected Option: {sport}</p>
                </span>
                <span class="optionType">
                    <h2>Filter by outcome</h2>
                    <select value={outcome} onChange={(event) => setOutcome(event.target.value)}>
                        {outcomeOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                        ))}
                    </select>
                    <p>Selected Option: {outcome}</p>
                </span>
                
            </div>
            
            <table>
                <tr>
                    {htmlHeaders}
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val[tl[0]]}</td>
                            <td>{val[tl[1]]}</td>
                            <td>{val[tl[2]]}</td>
                            <td>{val[tl[3]]}</td>
                            <td>{val[tl[4]]}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default BetTracker