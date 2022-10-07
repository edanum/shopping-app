import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import Results from "./components/Results";
import { SearchBar } from "./components/Searchbar";
import { Header } from "./components/Header";

function App() {
 
  
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Results
      />
    </div>
  );
}

export default App;
