import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Main, MyPage } from './pages';
import { Footer } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path={'/mypage'} element={<MyPage />} />
      </Routes>
      {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
