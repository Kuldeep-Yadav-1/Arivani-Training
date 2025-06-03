import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Practice from "./components/Practice";
import MyHome from "./components/Home";
import Card from "./components/Card";
import Form from "./components/Form";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/card" element={<Card />} />
        <Route path="/form" element={<Form />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
