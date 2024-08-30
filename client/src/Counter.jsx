import React, { useState } from "react";

function Counter() {
  const [cnt, setCtn] = useState(0);
  const [list, setList] = useState([]);
  return (
    <div>
      <button onClick={() => setCtn(cnt - 1)}>-</button>
      <button onClick={() => setList([...list, cnt])}>{cnt}</button>
      <button onClick={() => setCtn(cnt + 1)}>+</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
