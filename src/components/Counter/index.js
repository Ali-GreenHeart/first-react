import { useEffect, useState } from "react"


function Counter() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    // lifecycle
    // setCount(5)
    // re-render
    // 1. Comp  Mount olunanda: [] no dependency 
    useEffect(() => {
        console.log('component yarandi, gozun aydin!')
    }, [])

    // 2. compo update olunanda: [count] dependency 
    useEffect(() => {
        console.log('count deyishdi')
    }, [count])

    // 3. comp unmount olunanda: 
    useEffect(() => {
        return () => {
            console.log('RIP 💀')
        }
    }, [])

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
