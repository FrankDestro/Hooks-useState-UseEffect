import { useState } from "react";

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Contagem = {count}</h1>
      <button onClick={handleClick}>Incrementar</button>
    </>
  );
}

export default App;
