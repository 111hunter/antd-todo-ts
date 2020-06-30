import React, { FC } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Todo from './views/Todo';
import { message } from 'antd';
import './App.css';

message.config({
  duration: 1,
  maxCount: 3,
});

const App: FC = () => (
  <React.Fragment>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Todo} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
);

export default App;