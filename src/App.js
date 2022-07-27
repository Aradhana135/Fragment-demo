import logo from './logo.svg';
import './App.css';
import Glosarry from './Components/Glosarry';
const list=[{id:1,term:'Javascript',description:'JavaScript is the world most popular programming language and it is object based programming lang'},
{id:2,term:'Java',description:'JavaScript is the world most popular programming language and it is object oriented programming lang'}
]
function App() {
  return (
    <>
    <Glosarry list={list}/>
    </>
  );
}

export default App;
