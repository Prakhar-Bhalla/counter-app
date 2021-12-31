import './App.css';
import {useState} from 'react';
import {Counter} from "./components/Counter";

function App() {
  const [count,setCount] = useState(6);
  const changeCounter = (num) => {
    console.log(num);
    setCount(pre => {
      return (pre+num);
    });
  }
  return (
    <div className="App">
      <Counter count={count} changeCounter={changeCounter}/>
    </div>
  );
}

export default App;
