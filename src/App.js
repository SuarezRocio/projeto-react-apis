import './App.css';
import { Router} from "./routes/Router";
import { GlobalContextProvider } from "./GlobalContext/globalState";
import {Header} from "./Components/Header/Header"


function App() {
  return (

    < GlobalContextProvider>
    <Header/>
    <Router/> 
    </ GlobalContextProvider>
    
  );
}

  
export default App;
