
import React from 'react';

function Clock() {
  return (
    <div className="App-header">
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;