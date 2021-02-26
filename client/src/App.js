import {ChatWindow, Join} from './components'
import {BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => (
  <Router>
    <Route exact path="/" component={Join} />
    <Route path="/chat" component={ChatWindow} />
  </Router>
);

export default App;
