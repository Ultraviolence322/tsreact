import { Navbar } from "./components/Navbar";
import { Switch, Route } from "react-router";
import './index.css'
import MainPage from "./routes/MainPage";
import AboutPage from "./routes/AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <h1>HI TSX</h1>
      <Switch>
        <Route path="/" exact component={MainPage}/>
        <Route path="/about" exact component={AboutPage}/>
      </Switch>
    </>
  );
}

export default App;
