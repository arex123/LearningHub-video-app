import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import MainComponent from './components/Maincomponent';
import WatchPage from './components/WatchPage';
import SearchList from './components/SearchList/SearchList';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='font-sans'>
          <Head />
          <Routes>
            <Route path="/" element={<Body />}>
              <Route index element={<MainComponent />} />
              <Route path="watch" element={<WatchPage />} />
              <Route path="results" element={<SearchList />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
