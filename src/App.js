import Header  from "./components/auth/Header"
import Login from "./components/auth/Login"
import Dashboard from "./components/auth/Dashboard"
import{Route,BrowserRouter as Router} from "react-router-dom"

function App(props) {
  return (
    <Router>
   
    <Route strict exact component={Login} path="/login" history={props.history}></Route>
    <Route strict exact component={Header} path="/header" history={props.history}></Route>
    <Route strict exact component={Dashboard} path="/dashboard" history={props.history}></Route>
    </Router>
  );
}

export default App;
