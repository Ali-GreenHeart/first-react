import Button from "./components/Button";
import Heading from "./components/Heading";

const divStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 30
}


function App() {
  return (
    <div style={divStyles}>
      <Heading />
      <Button />
    </div>
  );
}

export default App;
