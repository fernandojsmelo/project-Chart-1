import { useEffect, useState } from 'react';
import Chart from './Chart';
import { getCandles } from './DataService';

function App() {

  const [symbol, setSymbol] = useState('BTCUSDT');
  const [interval, setInterval] = useState('1m');
  const [data, setData] = useState([]);

  useEffect(() => {
    getCandles(symbol, interval)
    .then(data => setData(data))
    .catch(err => alert(err.response ? err.response.data : err.message))
  }, [interval, symbol])

  function onSymbolChange(event) {
    setSymbol(event.target.value);
    
  }

  function onIntervalChange(event) {
    setInterval(event.target.value);
    
  }

  return (
   <div>
    <select onChange={onSymbolChange}>
      <option>BTCUSDT</option>   
      <option>ETHUSDT</option>   
      <option>ADAUSDT</option>   
    </select>
    <select onChange={onIntervalChange}>
      <option>1m</option>   
      <option>1d</option>   
      <option>1w</option>   
    </select>
    <Chart data={data} />
   </div> 
  );
}

export default App;
