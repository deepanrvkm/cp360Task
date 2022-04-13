import './App.css';
import React from "react";
import RoutesApp from './router/Router'
import GlobalState from './reducer/GlobalState'
import GlobalContext from './GlobalContext'

function App() {
  return (
    <div className="App">
        <GlobalContext.Provider value={GlobalState()}>
            <RoutesApp/>
        </GlobalContext.Provider>        
    </div>
  );
}

export default App;
