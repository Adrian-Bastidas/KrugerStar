import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './shared/navigation/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import home from './components/screens/home';
import details from './components/screens/details';

function App() {
  return (
   <Router>
    <Navbar/>
    <Switch>
      <Route path="/" exact component={home} r="true"/>
      <Route path="/src/components/screens/details.js" component={details}/>
    </Switch>
   </Router>
  );
}

export default App;
