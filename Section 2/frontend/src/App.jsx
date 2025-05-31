import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Practice from "./components/Practice";
import MyHome from "./components/Home";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      {/* <Routes>
        <Route path="/" element={<MyHome/>} />
        <Route path="/practice" element={<Practice/>} />
      </Routes> */}
      <Card/>
    </BrowserRouter>

  );
}

export default App;
