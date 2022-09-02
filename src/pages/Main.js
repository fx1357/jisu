import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Modal, Button, Form } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Home from '../components/Home';
import PrivateLetters from '../components/PrivateLetters';
import Heart from 'react-animated-heart';

const Main = () => {
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEBCD',
  };

  const [page, setpage] = useState(0);
  const [isClick, setClick] = useState(false);

  useEffect(() => {
    setClick(true);
  }, []);

  function changePage(params) {
    if (page === 0) setpage(1);
    else setpage(0);
  }

  return (
    <div style={styles}>
      <div align="center">
        <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
        {page === 0 ? <Home setpage={setpage} /> : null}
        {page === 1 ? <PrivateLetters setpage={setpage} /> : null}
        <br />
        <Button onClick={changePage}>
          {page === 0 ? '편지' : '처음으'}로 가기
        </Button>
        <br /> <br /> <br /> <br /> <br />
      </div>
    </div>
  );
};

export default Main;
