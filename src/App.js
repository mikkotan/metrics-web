import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

import Overview from './pages/Overview'
import Metric from './pages/Metric'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route path="/metrics/:id" component={Metric} />
          <Route path="/home" component={Overview} />
          <Route path="/" component={() => <Redirect to="/home" />} />
        </Switch>
      </Router>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
