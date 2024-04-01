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
import ChannelProfile from './components/Channel/ChannelProfile';
import Course from './components/LearningList/Course';
import CourseWatch from './components/LearningList/CourseWatch';

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
              <Route path="user" element={<ChannelProfile />} />
              <Route path="courses" element={<Course />} />
              <Route path="mycourse/watch" element={<CourseWatch />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
