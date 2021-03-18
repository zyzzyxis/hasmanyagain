import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import {Container} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import About from './pages/About';
import { PRIMARY_COLOR } from './styles';
import ComponentDemo from './pages/ComponentDemo';
import Users from './pages/Users';
import Grades from './pages/Grades';
import Skills from './pages/Skills';

function App() {

  return (
    <>
    <NavBar />
    <h1 style={{color: PRIMARY_COLOR }}>Header Here</h1>
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/grades' component={Grades} />
        <Route exact path='/skills' component={Skills} />
        <Route exact path='/componentDemo' component={ComponentDemo} />
        
      </Switch>
      </Container>
   </>
  );
}

export default App;
