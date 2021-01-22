import React from 'react';
import LazyImageLoad from './components/LazyImageLoad';

function App() {
  return (
    <div className='App' style={{height: '100vh'}}>
      <LazyImageLoad
        thumbnail='https://forge-homework.s3.amazonaws.com/thumb.jpg'
        src='https://forge-homework.s3.amazonaws.com/fullsize.jpg'
      />
    </div>
  );
}

export default App;
