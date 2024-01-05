import { useState } from "react";
import "./App.css";
import Movies from "./components/Movies";
import { Data } from "./Data";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Trailer from "./components/Trailer";

function App() {
  const [aflem, setAflem] = useState(Data);
  const add = (newMovie) => {
    setAflem([...aflem, newMovie]);
  };
  const [search, setSearch] = useState("");
  const getSearch = (liktebtou) => {
    setSearch(liktebtou);
  };
  const [rate, setRate] = useState("");
  const getRate = (rate) => {
    setRate(rate);
  };
  console.log(rate);
  return (
    <div className="App">
      <NavigationBar getSearch={getSearch} getRate={getRate} />
      <AddMovie add={add} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MovieList" element={<MovieList aflem={aflem} search={search} rate={rate} />}/>
        <Route path="/movie/:id" element={ <Trailer aflem={aflem} /> } />
      </Routes>
    </div>
  );
}

export default App;
