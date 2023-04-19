import React, { useState } from 'react';
import Button2 from './Button2';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked the button {count} times.</p>
      <Button label="Click me" onClick={handleClick} />
    </div>
  );
}

export default App;