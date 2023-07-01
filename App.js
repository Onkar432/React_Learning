import './App.css';

function App() {
  let name='Onkar Pathak'
  return (
  
    <div className="App">
      <header className="App-header">
       
      <h1>Hello react I am {name}</h1>
      <Demo></Demo>
      </header>
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <header className="App-header">
       
      <h1>Demo function</h1>
      </header>
    </div>
  );
}

export default App;
