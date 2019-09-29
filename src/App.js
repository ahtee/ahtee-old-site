import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Projects from './Projects';
import NotFound from './NotFound';
import ben from './images/ben.jpg';

const DarkTheme = styled.div`
  background-color: #393e46;
  color: #eeeeee;
  min-height: 100vh;
`;

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <DarkTheme>
      <Router>
        <Navbar
          image={ben}
          items={[{ id: 'projects', name: 'Projects', to: '/projects' }]}
        />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </DarkTheme>
  );
}

export default App;
