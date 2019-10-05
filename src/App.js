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

const Context = React.createContext();
const initialState = {
  loggedIn: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOG_IN':
      return {
        ...state,
        value: action.payload
      };
    default:
      return state;
  }
};

const DarkTheme = styled.div`
  background-color: #393e46;
  color: #eeeeee;
  min-height: 100vh;
`;

function App() {
  const [loggedIn, setLoggedIn] = React.useState(initialState);
  const [state, dispatch] = React.useReducer(reducer, initialState);

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
