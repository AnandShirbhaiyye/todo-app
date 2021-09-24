import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route'
import './App.css';
import AddTask from './components/AddTask';
import Login from './components/Login'
import Logout from './components/Logout';
import Register from './components/Register';
import UpdateTask from './components/UpdateTask';
import ViewTask from './components/ViewTask';

function App() {
  return (
    <div className="App">
    
      <Router>
        <Route exact path={["/","/login"]} component={Login}/>

        <Switch>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/viewtask" component={ViewTask}/>
          <Route exact path="/addtask" component={AddTask}/>
          <Route exact path="/logout" component={Logout}/>
          <Route exact path="/update/:taskId" component={UpdateTask}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

