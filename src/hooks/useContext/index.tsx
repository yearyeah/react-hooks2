import React, { Dispatch, SetStateAction, useContext, useState } from 'react';

// 用法1
type ContextType = [string, Dispatch<SetStateAction<string>>];
const MyContext = React.createContext<ContextType>(['', () => {}]);

// 用法2
const ThemeContext = React.createContext('light');

const Child = () => {
  const [val, setVal] = useContext(MyContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <input
        type="text"
        value={val as string}
        onChange={(e) => setVal(e.target.value as string)}
      />{' '}
      &nbsp; theme:{theme}
    </div>
  );
};

const UseContextFunc = () => {
  const [val1, setVal1] = useState('1');
  const [val2, setVal2] = useState('2');

  return (
    <div>
      <h2>useContext</h2>
      <MyContext.Provider value={[val1, setVal1]}>
        <div>{val1}</div>
        <Child />
      </MyContext.Provider>
      <MyContext.Provider value={[val2, setVal2]}>
        <div>{val2}</div>
        <Child />
      </MyContext.Provider>
    </div>
  );
};

export default UseContextFunc;
