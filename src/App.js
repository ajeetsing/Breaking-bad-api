import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <main>
          <Route exact path="/:id" component={DetailsScreen} ></Route>
          <Route exact path="/" component={HomeScreen}  ></Route>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
