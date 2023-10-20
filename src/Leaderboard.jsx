import './App.css'
import { useState } from 'react'

const tableHeaders = ['User', 'Coins', 'Position']
const tl = tableHeaders.map(word => word.toLowerCase())

const htmlHeaders = tableHeaders.map(word => <th>{word}</th>)

function dataGen(dataArray, columns) {
    let obj = {}
    for (let i=0; i<5; i++) {
        obj[columns[i]] = dataArray[i]
    }
    return obj
}
const data1 = dataGen(['Nakul', 9001, 0], tl)
const data2 = dataGen(['Raph', -100000, 0], tl)
const data3 = dataGen(['Matt E', 42000, 0], tl)
const data4 = dataGen(['New User', 0, 0], tl)


const data = [data1, data2, data3, data4]


const displayData = data.sort((a, b) => b.coins - a.coins)

for (let i=0; i<displayData.length; i++) {
    displayData[i].position = i+1
}

function Leaderboard() {
    return (
        <div>
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
                        </tr>
                    )
                })}
            </table>
        </div>
    )

}

export default Leaderboard;