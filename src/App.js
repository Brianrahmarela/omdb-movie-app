import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//component
import Header from './components/Header';

//pages
import Home from './pages/Home';
import DetailMovie from './pages/DetailMovie';

function App() {
  return (
   <Router>
     <Header/>
     <Switch>
     <Route exact path="/">
       <Home/>
     </Route>
     <Route exact path="/detail-movie">
       <DetailMovie/>
     </Route>
     </Switch>
   </Router>
  );
}

export default App;
