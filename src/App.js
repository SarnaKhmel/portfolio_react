import { NavLink, Switch, Route } from "react-router-dom";
// import { DatePicker } from "antd";
// import "antd/dist/antd.css";
import "./App.css";
import TodoComponent from "./components/TodoComponent";
import HomeComponent from "./components/HomeComponent";
import CalculatorComponent from "./components/CalculatorComponent";
import CVComponent from "./components/CvComponent";
import WeatherComponent from "./components/WeatherComponent";
import FlappyComponent from "./components/FlappyComponent";
import MemesComponent from "./components/MemesComponent";
import SnakeComponents from "./components/SnakeComponents";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/" activeClassName="selected">
          HOME
        </NavLink>
        <NavLink to="/cv" activeClassName="selected">
          CV
        </NavLink>
        <NavLink to="/todo" activeClassName="selected">
          TODO
        </NavLink>
        <NavLink to="/memes" activeClassName="selected">
          MEMES
        </NavLink>
        <NavLink to="/calculator" activeClassName="selected">
          CALCULATOR
        </NavLink>
        <NavLink to="/weather" activeClassName="selected">
          WEATHER
        </NavLink>
        <NavLink to="/flappy" activeClassName="selected">
          FLAPPY
        </NavLink>
        <NavLink to="/snake" activeClassName="selected">
          SNAKE
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/" component={HomeComponent} />
        <Route path="/todo" component={TodoComponent} />
        <Route path="/calculator" component={CalculatorComponent} />
        <Route path="/cv" component={CVComponent} />
        <Route path="/weather" component={WeatherComponent} />
        <Route path="/flappy" component={FlappyComponent} />
        <Route path="/memes" component={MemesComponent} />
        <Route path="/snake" component={SnakeComponents} />
      </Switch>
    </div>
  );
}

export default App;
