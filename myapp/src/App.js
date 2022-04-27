import logo from './logo.svg';
import './App.css';
import {Select_basic } from "./components/select"
import { Assync_select}from "./components/async"

function App() {
  return (
    <div className="App">
     <Select_basic/>
     <Assync_select/>
    </div>
  );
}

export default App;
