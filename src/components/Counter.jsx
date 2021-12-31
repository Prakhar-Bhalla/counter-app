export const Counter = ({count,changeCounter}) => {
    return <>
    <h2 style=  {{color : "crimson"}}>Counter : <span style={{color : "chocolate", fontWeight : "lighter"}}>{count}</span></h2>
    <h5 style=  {{color : "crimson"}}>Counter is {count % 2 === 0 ? "Even" : "Odd"}</h5>
    <div>
        <button style={{
            backgroundColor : "cyan",
            color : "brown",
            border : "1px solid cyan",
            margin : "0 4px",
            width : "50px",
            height : "50px",
            borderRadius : "25px"
        }} onClick={() => changeCounter(1)}><h5>Add 1</h5></button>
        <button style={{
            backgroundColor : "aquamarine",
            color : "brown",
            border : "1px solid aquamarine",
            margin : "0 4px",
            width : "50px",
            height : "50px",
            borderRadius : "25px"
        }} onClick={() => changeCounter(-1)}><h5>Sub 1</h5></button>
        <div style={{margin : "10px 0"}}>
        <button style={{
            backgroundColor : "skyblue",
            color : "brown",
            border : "1px solid skyblue",
            margin : "0 4px",
            width : "70px",
            height : "70px",
            borderRadius : "35px"
        }} onClick={() => changeCounter(count)}><h5>Double</h5></button>
        </div>
    </div>
    </>
}