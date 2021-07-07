import { createGlobalStyle } from "styled-components"
import NavBar from "./components/Navbar/NavBar"
import Layout from "./components/Layout/Layout"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
  }
  body {
    background-color: #E8F6EF;
    overflow-x: hidden;
  }
`

function App() {
  return (
    <>
        <GlobalStyle />
        <NavBar />
        <Layout />
        
    </>
  );
}

export default App;
