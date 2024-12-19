import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Switch>
        <Route exact path = "/"><News country = "us" pageSize ={9} category = "general" key="general"/></Route> {/*When the category is general, the path will be '/' */}
        <Route exact path = "/business"><News country = "us" pageSize ={9} category = "business" key="business"/></Route> 
        <Route exact path = "/entertainment"><News country = "us" pageSize ={9} category = "entertainment" key="entertainment"/></Route> 
        <Route exact path = "/health"><News country = "us" pageSize ={9} category = "health" key="health"/></Route> 
        <Route exact path = "/science"><News country = "us" pageSize ={9} category = "science" key="science"/></Route> 
        <Route exact path = "/sports"><News country = "us" pageSize ={9} category = "sports" key="sports"/></Route> 
        <Route exact path = "/technology"><News country = "us" pageSize ={9} category = "technology" key="technology"/></Route> 
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
