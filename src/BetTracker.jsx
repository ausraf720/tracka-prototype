import './App.css'
import { useState } from 'react'


const tableHeaders = ['Time', 'Sport', 'Odds', 'Stake', 'Outcome', 'Win/Loss Button']
const tl = tableHeaders.map(word => word.toLowerCase())
tl[tl.length-1] = 'confirmer'

const htmlHeaders = tableHeaders.map(word => <th>{word}</th>)

function dataGen(dataArray, columns) {
    let obj = {}
    for (let i=0; i<5; i++) {
        obj[columns[i]] = dataArray[i]
    }
    return obj
}
const data0 = dataGen(['Tueday', 'NFL', '1.5', '400', 'PENDING', '--'], tl)
const data1 = dataGen(['Tueday', 'NFL', '3.5', '100', 'WIN', '--'], tl)
const data2 = dataGen(['Monday', 'NBA', '3', '50', 'PENDING', '--'], tl)
const data3 = dataGen(['Monday', 'NBA', '5', '200', 'WIN', '--'], tl)
const data4 = dataGen(['Friday', 'NFL', '2.5', '100', 'LOSE', '--'], tl)
const data5 = dataGen(['Thursday', 'NBA', '4', '150', 'WIN', '--'], tl)

const data = [data0, data1, data2, data3, data4, data5]


// Function to filter data based on options selected
function dataFilter(array, type, option) {
    
    if (option == 'All') {
        return array
    }
    else {
        const newData = []
        for (let i=0; i<array.length; i++) {
            if (array[i][type] == option) {
                newData.push(array[i])
            }
        } 
        return newData
    }
}


function BetTracker() {
    const sportOptions = ['All', 'NFL', 'NBA']
    const outcomeOptions = ['All', 'WIN', 'LOSE', 'PENDING']
    const pendingOptions = ['PENDING', 'WIN', 'LOSE']
    const [sport, setSport] = useState(sportOptions[0])
    const [outcome, setOutcome] = useState(outcomeOptions[0])
    const [pending, setPending] = useState(pendingOptions[0])

    // data to be displayed depends on filters
    let displayData = dataFilter(data, 'sport', sport)
    displayData = dataFilter(displayData, 'outcome', outcome)

    // create buttons for pending
    for (let i=0; i<displayData.length; i++) {
        if (data[i].outcome == 'PENDING') {
            data[i].confirmer = true
        }
    }
    

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
                {displayData.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val[tl[0]]}</td>
                            <td>{val[tl[1]]}</td>
                            <td>{val[tl[2]]}</td>
                            <td>{val[tl[3]]}</td>
                            <td>{val[tl[4]]}</td>
                            <td>{val[tl[5]] && 
                                <select value={pending} onChange={(event) => setPending(event.target.value)}>
                                    {pendingOptions.map((option, index) => (
                                    <option key={index} value={option}>
                                        {option}
                                    </option>
                                    ))}
                                </select>}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default BetTracker