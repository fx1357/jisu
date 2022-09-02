import { React } from 'react';
import getD_Day from '../pages/dDay';
import TypingName from './TypingName';

function Home() {
  return (
    <div>
      <h1> 지수야 안녕! </h1>
      <TypingName />
      <br />
      <h1>{getD_Day()}</h1>
    </div>
  );
}

export default Home;
