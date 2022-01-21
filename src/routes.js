import PrivateRoute from "./components/auth";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import Landing from "./components/pages/Landing";

const Routes = () => (
    <Router>
        <Switch>
            <Route>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
            <Route exact path='/landing' component={Landing}/>
            </Route>
        </Switch>
    </Router>    

);

export default Routes;
