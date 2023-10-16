
import { useState } from 'react';
import './App.css';

function App() {
  let [data, isData] = useState(10)
  let addValue = ()=>{
    if(data == 20){
      return
    }
    isData(data+=1)
  }
  let decValue = ()=>{
    if(data == 0){
      return
    }
    isData(data-=1)
   
  }
  return (
    <div className="App">
      <button onClick={addValue}>Increase</button>
      <p>{data}</p>
      <button onClick={decValue}>Decrease</button>
      
    </div>
  );
}

export default App;
