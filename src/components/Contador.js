import React, { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default Contador;
