import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>已点击 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        点击加1
      </button>
    </div>
  )
};
