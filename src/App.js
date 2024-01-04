import { useState } from 'react';
import './App.css';
import Movies from './components/Movies';
import { Data } from './Data';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import NavigationBar from './components/NavigationBar';

function App() {

  const [aflem, setAflem] = useState(Data)
  const add=(newMovie)=>{
    setAflem([...aflem,newMovie])
  }
const [search, setSearch] = useState("")
  const getSearch=(liktebtou)=>{
setSearch(liktebtou)
  }
  const [rate, setRate] = useState("")
  const getRate=(rate)=>{
setRate(rate)
  }
  console.log(rate)
  return (
    <div className="App">
    <NavigationBar getSearch={getSearch} getRate={getRate} />
        <AddMovie add={add} />
    <MovieList aflem={aflem} search={search} rate={rate}  />
    </div>
  );
}

export default App;
