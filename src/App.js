
let name = 'ali'

const h2Styles = {
  backgroundColor: 'black',
  color: 'lime',
  textAlign: 'center'
}
const divStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 30
}
const btnStyles = {
  backgroundColor: 'black',
  color: 'lime',
  textAlign: 'center',
  border: '1px solid lime',
  borderRadius: 4,
  cursor: 'pointer'
}

function App() {
  return (
    <div style={divStyles}>
      <h1 style={h2Styles}>Ay {name}, 2+2={2 + 2} edir.</h1>
      <button
        onClick={() => {
          alert('test')
        }}
        style={btnStyles}
      >click me</button>
    </div>
  );
}

export default App;
