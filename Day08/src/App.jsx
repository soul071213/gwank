import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Card from "./components/Card";
import NoPage from "./components/Nopage";
import CardList from "./CardList";
import Home from "./components/Home";
export default function App() {
  return (
    <div className="App">
      {/* Route 컴포넌트에 path와 연결될 element를 작성한다.*/}
      <Routes path="/" element={<Home></Home>}></Routes>
      <Routes path="/Header" element={<Header/>}></Routes>
      <Routes path="/Card" element={<Card/>}></Routes>
      <Routes path="/CardList" element={<CardList/>}></Routes>
      <Route path="*" element={<NoPage/>}></Route>
    </div>
  );
}