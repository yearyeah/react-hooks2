import React, { useState, useMemo } from 'react';

function UseMemoComputed() {
  const [number, setNumber] = useState(0);
  const [numberList, setNumberList] = useState([123]);

  const numberSortList = useMemo(() => {
    console.log('useMemo refresh', numberList);
    let newList = [...numberList];
    return newList.sort((a, b) => a - b);
  }, [numberList]);

  return (
    <div>
      <h2>useMemo computed</h2>
      <div>
        numberList:
        {numberList.map((item) => (
          <span>{item}&nbsp;</span>
        ))}
      </div>
      <div>
        numberSortList:
        {numberSortList.map((item) => (
          <span>{item}&nbsp;</span>
        ))}
      </div>

      <p>
        new number:
        <input
          type="number"
          onChange={(e) => {
            let num = Number(e.target.value);
            setNumber(num);
          }}
        />
        &nbsp;
        <button
          onClick={(e) => {
            let newList = [...numberList];
            if (numberList.indexOf(number) === -1) {
              newList.push(number);
            }

            console.log('newList：', newList);
            setNumberList(newList);
          }}
        >
          add
        </button>
      </p>
    </div>
  );
}

export default UseMemoComputed;
