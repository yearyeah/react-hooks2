import React, { useState, useCallback, useRef } from 'react';

const StepComponent = React.memo(({ onClick }) => {
  console.log('StepComponent refresh');
  return <button onClick={onClick}>step +1</button>;
});

function UseCallbackFunc() {
  // const [val, setVal] = useState('');
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  const valRef = useRef(null);

  // const handClickStep = useCallback(() => {
  //   setStep(step + 1);
  // }, [valRef]);

  const handClickStep = useCallback(() => {
    setStep(step + 1);
  }, [step]);

  return (
    <div>
      <h2>useCallback func</h2>
      {/* <p>
        <span>{val}</span>
        <input
          type="text"
          onChange={(e) => {
            const {
              target: { value },
            } = e;
            setVal(value);
            valRef.current = value;
          }}
        />
      </p> */}
      <p>
        <span>{step}</span>
        <StepComponent onClick={handClickStep} />
      </p>
      <p>
        <span>{count}</span>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          count +1
        </button>
      </p>
    </div>
  );
}

export default UseCallbackFunc;
