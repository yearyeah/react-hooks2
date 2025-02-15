import * as React from 'react';
import './style.css';
import UseRefStateComponent from './hooks/useRef/state';
import UseRefDomComponent from './hooks/useRef/dom';
import UseMemoComponent from './hooks/useMemo/component';
import UseMemoComputed from './hooks/useMemo/computed';
import UseCallbackFunc from './hooks/useCallback/func';
import UseContextFunc from './hooks/useContext/';
import UseReducerFunc from './hooks/useReducer/';

export default function App() {
  return (
    <div>
      <h1>Hooks Demo</h1>
      <UseCallbackFunc />
      <UseMemoComponent />
      <UseMemoComputed />
      <UseRefStateComponent />
      <UseRefDomComponent />
      <UseContextFunc />
      <UseReducerFunc />
    </div>
  );
}
