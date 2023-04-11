import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Stories from "./components/Stories";
import States from "./components/States";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Stories" element={<Stories />} />
        <Route path="States" element={<States />} />
      </Routes>
    </div>
  );
}

export default App;
