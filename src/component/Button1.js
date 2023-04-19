import React, { useState } from 'react';

function Button(props) {
  const [label, setLabel] = useState(props.label);

  const handleClick = () => {
    setLabel('Clicked');
    props.onClick();
  };

  return (
    <button onClick={handleClick}>
      {label}
    </button>
  );
}

export default Button;
