import "./App.css";
import Addfood from "./components/Addfood";
import Fooddetails from "./components/Fooddetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchfood from "./components/Searchfood";
import Updatefood from "./components/Updatefood";
import Orders from "./components/Orders";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addfood">
            <Addfood />
          </Route>
          <Route path="/fooddetails:id">
            <Fooddetails />
          </Route>
          <Route path="/searchfood:searchKey">
            <Searchfood/>
          </Route>
          <Route path="/update:id" >
            <Updatefood/>
          </Route>
          <Route path="/orders">
            <Orders/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
