import "./App.css";
import Header from "./components/header";
import Body from "./components/body";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Body />
      </main>
    </div>
  );
}

export default App;
