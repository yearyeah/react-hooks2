import React, { useState, useMemo } from 'react';

function UseMemoComponent() {
  const [key, setKey] = useState('');
  const [val, setVal] = useState('');

  const keyComponent = useMemo(() => {
    console.log('useMemo refresh');
    return <span>{key}</span>;
  }, [key]);

  return (
    <div>
      <h2>useMemo Component</h2>
      <p>
        key: {keyComponent}&nbsp;value: {val}
      </p>
      <p>
        key:
        <input
          type="text"
          onChange={(e) => {
            setKey(e.target.value);
          }}
        />
      </p>
      <p>
        val:
        <input
          type="text"
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
      </p>
    </div>
  );
}

export default UseMemoComponent;
