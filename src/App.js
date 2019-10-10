import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Projects from './Projects';
import ben from './images/ben.jpg';
import Blog from './Blog';

const Context = React.createContext();

const DarkTheme = styled.div`
  background-color: #393e46;
  color: #eeeeee;
  min-height: 100vh;
`;

function App() {
  return (
    <Context.Provider>
      <DarkTheme>
        <Router>
          <Navbar
            title="Ben Otte"
            image={ben}
            items={[
              { id: 'projects', name: 'Projects', to: '/projects' },
              { id: 'blog', name: 'Blog', to: '/blog' }
            ]}
          />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:id" component={Blog} />
          </Switch>
          <Footer />
        </Router>
      </DarkTheme>
    </Context.Provider>
  );
}

export default App;
