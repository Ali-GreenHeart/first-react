import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div style={{
            color: 'lime',
            borderTop: '1px solid lime',
            textAlign: 'center'
        }}>
            <h2>{count}</h2>
            <button
                onClick={() => {
                    setCount(count + 1)
                }}
            >+</button>
            <button
                onClick={() => {
                    setCount(count - 1)
                }}
            >-</button>
            <button
                onClick={() => {
                    setCount(0)
                }}
            >0</button>
            <button
                onClick={() => {
                    console.log(count)
                }}
            >goster</button>
            <button
                onClick={() => {
                    let ed = +prompt('ededi daxil edin: ')
                    setCount(ed)
                }}
            >special</button>
        </div>
    )
}

export default Counter;
