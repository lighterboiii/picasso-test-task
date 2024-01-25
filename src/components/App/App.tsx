import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostsList from '../PostsList/PostsList.tsx';
import PostDetails from '../PostDetails/PostDetails.tsx';
import Header from '../Header/Header.tsx';
import Footer from '../Footer/Footer.tsx';

const App: React.FC = () => {
  return (
    <>
      <Header title='Picasso Test Task' />
      <Router>
        <Routes>
          <Route path="/" element={<PostsList />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </Router>
      <Footer />
    </>

  );
};

export default App;

