import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Home } from './pages';
import { useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll'

import './App.css';


function App() {

  useEffect(() => {
    scroll.scrollToTop()
  }, [])

  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
