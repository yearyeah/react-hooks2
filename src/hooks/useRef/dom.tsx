import React, { useState, useRef } from 'react';

function UseRefDomComponent() {
  const [val, setVal] = useState('');
  const inputRef = useRef(null);

  const handleClick = () => {
    setVal(inputRef.current.value);
  };

  return (
    <div>
      <h2>useRef dom</h2>
      <p>value: {val}</p>
      <input ref={inputRef} />
      <button onClick={handleClick}>get val</button>&nbsp;
    </div>
  );
}

export default UseRefDomComponent;
