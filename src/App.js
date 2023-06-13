import logo from './logo.svg';
import './App.css';

function App() {
  
  let str ="Hello World";
  let pi = 3.14;
  let active = true;
  
  return(
    <>
    <h1>Hello Universe</h1>
    <h1>pi {pi}</h1>
    <h1>{str}</h1>
    <h1>{active ? "good morning" : "good night"}</h1>
    {active ? "Good morning": "Good night"};
    {active && <h1>Good Morning</h1>}
    </>
  )
}

export default App;
