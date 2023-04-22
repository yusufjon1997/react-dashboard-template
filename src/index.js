import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClientProvider, QueryClient, QueryCache } from 'react-query';
import './index.css';

const client = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => {
      if (query.state.data !== undefined) {
        alert(`Something`);
      }
    }
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1
    },
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Router>
          <Routes />
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);


