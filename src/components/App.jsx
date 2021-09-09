import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GalleryScreen from '../GalleryScreen';
import HomeScreen from '../HomeScreen';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/gallery" component={GalleryScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
