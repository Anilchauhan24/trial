import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Navbar/Home";
function App() {
  return (
    <div>
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" component={Home} />
          Helllo
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}
export default App;
