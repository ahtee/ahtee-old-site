import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Home';
import Projects from './Projects';
import NotFound from './NotFound';
import ben from './images/ben.jpg';
import Blog from './Blog';
import BlogPost from './components/BlogPost';

const DarkTheme = styled.div`
  background: #232931;
  color: #eeeeee;
  min-height: 100vh;
`;

function App() {
  return (
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
          <Route path="/blog/:post" component={BlogPost} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </DarkTheme>
  );
}

export default App;
