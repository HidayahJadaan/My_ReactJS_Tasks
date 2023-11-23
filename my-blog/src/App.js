import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home"

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: "Hidayah", age: 30 };

  return (
    <div className="app">
        <Navbar />
      <div className="content">
       <Home />
      </div>
    </div>
  );
}
export default App;
