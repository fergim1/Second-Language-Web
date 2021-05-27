 import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './pages';
import { SingInPage } from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signin' exact component={SingInPage} />
      </Switch>
    </Router>
  );
}

export default App;
