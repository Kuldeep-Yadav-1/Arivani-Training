import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Practice from "./components/Practice";
import MyHome from "./components/Home";
import Card from "./components/Card";
import Form from "./components/Form";
import Login from "./components/Login";
import LaptopList from "./components/LaptopList";
import Navbar from "./components/Navbar";
import Todoapp from "./components/Todoapp";
import Practiced from "./components/Practiced";
// import Navbar1 from "./components/Navbar1";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Navbar1/> */}
      <Routes>
        <Route path="/" element={<MyHome />} />
        {/* <Route path="/practice" element={<Practice />} /> */}
        <Route path="/facebookpost" element={<Card />} />
        <Route path="/form" element={<Form />} />
        <Route path="/todoapp" element={<Todoapp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/laptop-list" element={<LaptopList />} />
        <Route path="/practiced" element={<Practiced />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
