//import './App.css';
import styled, { createGlobalStyle } from "styled-components";
import { Router} from "./routes/Router";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    body{
        background-color: #FCEEC8;
    }
}`;

function App() {
  return (
   <>
   <Router/>
   </>
  );
}

export default App;