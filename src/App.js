import {TodoWrapper} from "./components/TodoWrapper";
import "./App.css";
import React from "react";
function App(){
  return(
      <div className="App">
        <TodoWrapper/>
          <p id="github">GitHub: <a href="https://github.com/MrFarhann">MrFarhann</a></p>
      </div>
  )
}

export default App;