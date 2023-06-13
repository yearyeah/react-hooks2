import React, { useState, useRef } from 'react';

function UseRefStateComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  console.log('component refresh');

  const handleClick = () => {
    countRef.current += 1;
    if (countRef.current <= 3) {
      setCount(countRef.current);
    }
  };

  const handleClear = () => {
    countRef.current = 0;
    setCount(countRef.current);
  };

  return (
    <div>
      <h2>useRef state</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>&nbsp;
      <button onClick={handleClear}>clear</button>
    </div>
  );
}

export default UseRefStateComponent;
