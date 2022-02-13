import './App.css';
import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Content from './components/Content';
import About from './components/About';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid sm={2} />
        <Grid xs={12} sm={8}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Content />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </Router>
        </Grid>
        <Grid sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;