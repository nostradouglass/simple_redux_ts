import React from 'react';
import Counter from './counter'
import { useAppSelector} from './hooks'

function App() {

  const count = useAppSelector((state: {counter: {count: number}}) => state.counter.count)

  return (
    <div className="App">
      <h3>Parent Component, data from redux: {count}</h3>
      <Counter />
    </div>
  );
}

export default App;
