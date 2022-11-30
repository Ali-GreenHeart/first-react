import { useState } from "react";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Heading from "./components/Heading";

const divStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 30
}


function App() {
  const [showCounter, setShowCounter] = useState(false)

  return (
    <div style={divStyles}>
      <Heading basliq="Bizim basliq2" />
      <Heading basliq="Menim adim ali" />
      <Heading basliq=" http://172.17.64.62:3000   " />
      <Button onClick={() => {
        setShowCounter(!showCounter)
      }} />
      {
        showCounter && <Counter />
      }
    </div>
  );
}

export default App;
