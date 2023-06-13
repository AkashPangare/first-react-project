import logo from './logo.svg';
import './App.css';

function App() {
  
  let str = `Hello Universe!!!`;
  let pi = 3.141159;
  let user = {id: 1,Name: "Akash"};
  
  return(
    <>
    <h1>Hello Universe</h1>
    <h1>pi {pi}</h1>
    <h1>{str}</h1>
    <h1>Id:{user.id},Name:{user.Name}</h1>
    </>
  )
}

export default App;
