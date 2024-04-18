
import logo from './logo.svg';
import './App.css';


import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Sidebar from './componenets/Sidebar';


import Home from './pages';
import SigninPage from './pages/signin';


function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SigninPage} exact />
      </Switch>
      </Router>
  );
}

export default App;
